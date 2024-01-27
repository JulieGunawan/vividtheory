const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config({path: './.env'});
const port = 5000;
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());


//ROUTES

//Create a blog
app.post("/blogs", async (req, res,next) => {
    try {
        const {title, slug, content, image} = req.body;
        const newBlog = await pool.query("INSERT INTO blogs (title, slug, content, image) VALUES($1, $2, $3, $4) RETURNING *", 
        [title, slug, content, image]);

        res.json(newBlog.rows);
        next();
    } catch(error) {
        console.log(error.message);
        return next(error);
    }
});
//get all blogs in blogs
app.get("/blogs", async (req, res, next) => {

})
//get a blog in blogs

//update a blog

//delete a blog

app.listen({port},() =>{
    console.log(`server running on port ${port}`);
});