import cors from 'cors'
import express from 'express'
import expressSession from 'express-session'
// import formidable from 'formidable'
import Knex from 'knex'
import fs from 'fs'

const knexConfig = require('./knexfile')
const knex = Knex(knexConfig[process.env.NODE_ENV ?? 'development'])

const uploadDir = __dirname + '/uploads'
fs.mkdirSync(uploadDir, { recursive: true })


const app = express()
app.use(cors({
    origin: [process.env.REACT_DOMAIN!],
    credentials: true
}))

app.use(expressSession({
    secret: process.env.EXPRESS_SESSION!,
    saveUninitialized: true,
    resave: false
}))

app.use(express.json())
app.use(express.urlencoded())
app.use('/uploads', express.static(uploadDir))
// app.post('/admin', async (req,res))
app.get('/restaurants', async(req, res) => {
    const restaurants = await knex.select('id', 'restaurant_name', 'restaurant_icon', 
    'restaurant_phone', 'restaurant_address', 'restaurant_photo1', 'restaurant_photo2', 
    'restaurant_photo3', 'restaurant_menu').from('restaurant')

    for (const restaurant of restaurants){
        restaurant.dishes = await knex
        .select('dishes_id')
        .from('dishes_id')
        .where('restaurant_id',restaurant.id);
    }
    res.json(restaurants)
})
const port = process.env.PORT ?? 8080

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})