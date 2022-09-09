import cors from 'cors'
import express from "express";
import expressSession from 'express-session'
import { formidable } from "formidable";
import Knex from "knex";
import fs from "fs";
import { checkPassword } from './hash';
import { hash } from 'bcryptjs'

const knexConfig = require("./knexfile");
const knex = Knex(knexConfig[process.env.NODE_ENV ?? "development"]);

const uploadDir = __dirname + "/uploads";
fs.mkdirSync(uploadDir, { recursive: true });
const form = formidable({
  uploadDir,
  keepExtensions: true,
  maxFiles: 1,
  filter: (part) => part.mimetype?.startsWith("image/") || false,
});

const app = express();
app.use(cors({
    origin: [process.env.REACT_DOMAIN!],
    credentials: true
}))

app.use(expressSession({
  secret: process.env.EXPRESS_SESSION!,
  saveUninitialized: true,
  resave: false
}))

app.use(express.json());
app.use(express.urlencoded());
app.use("/uploads", express.static(uploadDir));
app.post("/edit", (req: any, res: any) => {
  console.log("edit");

  form.parse(req, async (err: any, fields: any, files: any) => {
    const trx = await knex.transaction();
    try {
      const file1 = Array.isArray(files["restaurant_icon"])
        ? files["restaurant_icon"][0]
        : files["restaurant_icon"];
      const file2 = Array.isArray(files["restaurant_photo1"])
        ? files["restaurant_photo1"][0]
        : files["restaurant_photo1"];
      const file3 = Array.isArray(files["restaurant_photo2"])
        ? files["restaurant_photo2"][0]
        : files["restaurant_photo2"];
      const file4 = Array.isArray(files["restaurant_photo3"])
        ? files["restaurant_photo3"][0]
        : files["restaurant_photo3"];
      const file5 = Array.isArray(files["restaurant_menu"])
        ? files["restaurant_menu"][0]
        : files["restaurant_menu"];
      await trx
        .insert({
          restaurant_name: fields["restaurant_name"],
          restaurant_icon: file1.newFilename,
          restaurant_phone: fields["restaurant_phone"],
          restaurant_address: fields["restaurant_address"],
          restaurant_photo1: file2.newFilename,
          restaurant_photo2: file3.newFilename,
          restaurant_photo3: file4.newFilename,
          restaurant_menu: file5.newFilename,
        })
        .into("restaurant")
        .returning("id");
      await trx.commit();
      res.json({ result: "ok" });
    } catch (e) {
      await trx.rollback();
    }
  });
});

app.post('/register', (req, res) => {
  form.parse(req, async (err, fields) => {

    const trx = await knex.transaction();
    // const user = await knex.select("id", "username")
    // .from("users")
    // .where("username", req.body.username);
    try {
      console.log(fields['username'], fields['password'])
      
      await trx.insert({
      username: fields['username'],
      password: await hash(fields['password'] as string, 10),
    }).into('users').returning('id');
    await trx.commit();
    res.json({result: 'ok'})
  }catch (e) {
    console.log(e);
    await trx.rollback();
    res.json({result: 'error'})
  } 
  // if(req.body.username === user[0].username){
  //   res.status(404).json({ result: "duplicate_username"})
  // }
})
});

app.get("/", (req, res) => {
  res.status(401).json({ result: "unauthorized" });
});
app.post("/login", async (req, res) => {
  console.log(req.body.username);
  const user = await knex
    .select("id", "username", "password")
    .from("users")
    .where("username", req.body.username);
  if (user.length === 0) {
    return res.status(404);
  }
  console.log("req.body.password", req.body.password, user[0].password);
    if (await checkPassword(req.body.password, user[0].password)) {
    req.session['userId'] = user[0].id
    return res.json({ id: user[0].id, username: user[0].username });
  } else {
    return res.status(400).json({ result: "wrong_password" });
  }
});

const isLogin = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.session["userId"]) {
    next();
  } else {
    res.status(401).json({ result: "unauthorized" });
  }
};

app.get("/users", isLogin, async (req, res) => {
  const users = await knex
    .select("id")
    .from("users")
    .where("id", "!=", req.session["userId"]);

  // for (const user of users) {
  //   user.languages = await knex
  //     .select("programming_language_id")
  //     .from("users_programming_languages")
  //     .where("user_id", user.id);
  // }

  res.json(users);
});
// app.get('/restaurants', async(req, res) => {
//     const restaurants = await knex.select('id', 'restaurant_name', 'restaurant_icon',
//     'restaurant_phone', 'restaurant_address', 'restaurant_photo1', 'restaurant_photo2',
//     'restaurant_photo3', 'restaurant_menu').from('restaurant')

//     for (const restaurant of restaurants){
//         restaurant.dishes = await knex
//         .select('dishes_id')
//         .from('dishes_id')
//         .where('restaurant_id',restaurant.id);
//     }
//     res.json(restaurants)
// })
const port = process.env.PORT ?? 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
