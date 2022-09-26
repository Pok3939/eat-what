import cors from "cors";
import express from "express";
// import expressSession from "express-session";
import { formidable } from "formidable";
import Knex from "knex";
import fs from "fs";
import { checkPassword } from "./hash";
import { hash } from "bcryptjs";
import { Bearer } from "permit";
import jwtSimple from "jwt-simple";

const knexConfig = require("./knexfile");
const knex = Knex(knexConfig[process.env.NODE_ENV ?? "development"]);
const permit = new Bearer({
  query: "access_token",
});

const uploadDir = __dirname + "/uploads";
fs.mkdirSync(uploadDir, { recursive: true });
const form = formidable({
  uploadDir,
  keepExtensions: true,
  maxFiles: 1,
  filter: (part) => part.mimetype?.startsWith("image/") || false,
});

const app = express();
app.use(
  cors({
    origin: [process.env.REACT_DOMAIN!],
    credentials: true,
  })
);
export interface User {
  id: number;
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

app.use(express.json());
app.use(express.urlencoded());
app.use("/uploads", express.static(uploadDir));
app.post("/edit", (req: any, res: any) => {
  console.log("edit");

  form.parse(req, async (err: any, fields: any, files: any) => {
    const trx = await knex.transaction();
    console.log("fields:", fields);

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
          restaurant_dishes_id: fields["restaurant_dishes_id"],
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

app.post("/register", (req, res) => {
  form.parse(req, async (err, fields) => {
    const trx = await knex.transaction();
    // const user = await knex.select("id", "username")
    // .from("users")
    // .where("username", req.body.username);
    try {
      console.log(fields["username"], fields["password"]);

      await trx
        .insert({
          username: fields["username"],
          password: await hash(fields["password"] as string, 10),
        })
        .into("users")
        .returning("id");
      await trx.commit();
      res.json({ result: "ok" });
    } catch (e) {
      console.log(e);
      await trx.rollback();
      res.json({ result: "error" });
    }
    // if(req.body.username === user[0].username){
    //   res.status(404).json({ result: "duplicate_username"})
    // }
  });
});

app.get("/", (req, res) => {
  res.status(401).json({ result: "unauthorized" });
});
app.post("/login", async (req: express.Request, res: express.Response) => {
  console.log(req.body);
  const user: any = await knex
    .select("id", "username", "password")
    .from("users")
    .where("username", req.body.username);
  if (user.length === 0) {
    return res.status(404);
  }
  console.log("req.body.password", req.body.password, user[0].password);
  if (await checkPassword(req.body.password, user[0].password)) {
    return res.json({
      id: user[0].id,
      username: user[0].username,
      token: jwtSimple.encode({ userId: user[0].id }, "1234"),
    });
  } else {
    return res.status(400).json({ result: "wrong_password" });
  }
});

const isLogin = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(req.body);

  const token = permit.check(req);
  console.log(token);

  try {
    const payload = jwtSimple.decode(token, "1234");
    if (payload["userId"]) {
      console.log("payload:", payload["userId"]);

      req.user = {
        id: payload["userId"],
      };
      console.log("req.user in islogin:", req.user.id);

      next();
    } else {
      res.status(401).json({ result: "unauthorized" });
    }
  } catch (e) {
    res.status(401).json({ result: "incorrect_token" });
  }
};

app.get("/users/me", isLogin, async (req, res) => {
  console.log("me", req.user!.id);

  const users = await knex
    .select("id")
    .from("users")
    .where("id", "!=", req.user!.id);

  res.json(users[0]);
});

app.get("/users", isLogin, async (req, res) => {
  const users = await knex
    .select("id")
    .from("users")
    .where("id", "!=", req.user!.id);

  res.json(users);
});

app.post("/userrecord", isLogin, async (req, res) => {
  console.log("hi");

  console.log("newrecord", req.user!.id);
  const abc = req.body.restaurant_name;
  console.log(abc);

  const users = await knex("userrecord")
    // .select("restaurant_name")
    // .from("restaurant")
    // .where("id", "!=", req.user!.id)
    .insert({
      restaurant_name: req.body.restaurant_name,
      user_id: req.user!.id,
    })
    .into("userrecord");

  res.json(users);
});

app.get("/recordcheck", isLogin, async (req, res) => {
  const recordchecks = await knex
    .select("restaurant_name", "created_at", "user_id")
    .from("userrecord")
    .where("user_id", req.user!.id);
  res.json(recordchecks);
});
app.get("/restaurants", async (req, res) => {
  let arrayUrl: any;
  // let myArray: any;
  if (req.query.array) {
    arrayUrl = req.query.array;
    console.log("get?", arrayUrl);
    // myArray = arrayUrl!.split(",");
  }

  const restaurants = await knex
    .select(
      "restaurant.id",
      "restaurant_name",
      "restaurant_icon",
      "restaurant_phone",
      "restaurant_address",
      "restaurant_photo1",
      "restaurant_photo2",
      "restaurant_photo3",
      "restaurant_menu",
      "restaurant_dishes_id",
      "text"
    )
    .from("restaurant")
    .join("dishes_id", "dishes_id.id", "restaurant.restaurant_dishes_id")

    .whereIn("restaurant_dishes_id", arrayUrl);
  res.json(restaurants);
});

app.get("/restaurants/:id", async (req, res) => {
  let id = req.params.id;
  console.log("restaurantid:", id);

  const restaurants: any = await knex
    .select(
      "id",
      "restaurant_name",
      "restaurant_icon",
      "restaurant_phone",
      "restaurant_address",
      "restaurant_photo1",
      "restaurant_photo2",
      "restaurant_photo3",
      "restaurant_menu"
    )
    .from("restaurant");

  res.json(restaurants);
});

app.get("/dishes", async (req, res) => {
  const dishes = await knex.select("*").from("dishes_id");
  res.json(dishes);
});

const port = process.env.PORT ?? 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
