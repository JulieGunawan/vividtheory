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
        const {title, slug, content, image, created_at, updated_at} = req.body;
        const newBlog = await pool.query("INSERT INTO blogs (title, slug, content, image, created_at, updated_at) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", 
        [title, slug, content, image, created_at, updated_at]);

        res.json(newBlog.rows);
        next();
    } catch(error) {
        console.log(error.message);
        return next(error);
    }
});
//get all blogs in blogs
app.get("/blogs", async (req, res, next) => {
    try{    
        const allBlogs = await pool.query("SELECT * FROM blogs");
        res.json(allBlogs.rows);
        next();
    }catch(error){
        console.log(error.message);
    }
})
//get a blog in blogs
app.get("/blogs/:id", async (req, res, next) => {
    try{
        const { id } = req.params;
        const blog = await pool.query("SELECT * FROM blogs WHERE id = $1", [id]);
        res.json(blog.rows[0]);
        next();
    } catch(error) {
        console.log(error.message);
    }
})
//update a blog
app.put("/blogs/:id", async (req, res, next) => {
    try{
        const { id } = req.params;
        const { title, slug, content, image, created_at, updated_at } = req.body;
        const updateBlog = await pool.query("UPDATE blogs SET title = $1, slug = $2, content = $3, image = $4, created_at=$5, updated_at=$6 WHERE id = $7",
            [title, slug, content, image, created_at, updated_at, id]);
        res.json("Blog was updated");
        next();
    } catch (error){    
        console.log(error.message);
    }
})
//delete a blog
app.delete("/blogs/:id", async (req, res, next) => {
    try{
        const { id } = req.params;
        const deleteBlog = await pool.query("DELETE FROM blogs WHERE id = $1", [id]);
        res.json("Blog was deleted");
        next();
    } catch(error){
        console.log(error.message);
    }
})

app.listen({port},() =>{
    console.log(`server running on port ${port}`);
});