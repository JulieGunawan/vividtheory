import express from 'express';
import cors from 'cors';
import expressHandlebars from 'express-handlebars';
import bodyParser from 'body-parser';
import path from 'path';
import 'dotenv/config';
import database from './db.js';

//test DB
database.authenticate()
    .then(() => {
    console.log("Database connected");
    })
    .catch((err) => {
    console.log("Error: " + err.message);
    });

const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
})
//middleware
// app.use(cors());
// app.use(express.json());

//API

//Create a blog
// app.post("/blogs", async (req, res) => {
//     try {
//         const {title, slug, content, image, created_at, updated_at, published_at} = req.body;
//         const newBlog = await pool.query("INSERT INTO blogs (title, slug, content, image, created_at, updated_at, published_at) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", 
//         [title, slug, content, image, created_at, updated_at, published_at]);

//         res.json(newBlog.rows);
//     } catch(error) {
//         console.log(error.message);
//     }
// });

//get all blogs in blogs
// app.get("/blogs", async (req, res) => {
//     try{    
//         const allBlogs = await pool.query("SELECT * FROM blogs");
//         res.json(allBlogs.rows);
//     }catch(error){
//         console.log(error.message);
//     }
// });

//get a blog in blogs using id
// app.get("/blogs/:id", async (req, res) => {
//     try{
//         const { id } = req.params;
//         const blog = await pool.query("SELECT * FROM blogs WHERE id = $1", [id]);
//         res.json(blog.rows[0]);
//         // next();
//     } catch(error) {
//         console.log(error.message);
//     }
// });

//get a blog in blogs using slug
// app.get("/blogs/:slug", async (req, res) => {
//     try{
//         const { slug } = req.params;
//         console.log(req.params);
//         const blog = await pool.query("SELECT * FROM blogs WHERE slug = $1", [slug]);
//         res.json(blog.rows[0]);
//         // next();
//     } catch(error) {
//         console.log(error.message);
//     }
// });

//update a blog
// app.put("/blogs/:id", async (req, res, next) => {
//     try{
//         const { id } = req.params;
//         const { title, slug, content, image, created_at, updated_at } = req.body;
//         console.log(req.body);
//         // const updateBlog = await pool.query("UPDATE blogs SET title = $1, slug = $2, content = $3, image = $4, created_at=$5, updated_at=$6 WHERE id = $7",
//         //     [title, slug, content, image, created_at, updated_at, id]);
//         await pool.query("UPDATE blogs SET title = $1, slug = $2, content = $3, image = $4, created_at=$5, updated_at=$6 WHERE id = $7",
//         [title, slug, content, image, created_at, updated_at, id]);
//         res.json("Blog was updated");
//         next();
//     } catch (error){    
//         console.log(error.message);
//     }
// });

//delete a blog
// app.delete("/blogs/:id", async (req, res, next) => {
//     try{
//         const { id } = req.params;
//         // const deleteBlog = await pool.query("DELETE FROM blogs WHERE id = $1", [id]);
//         await pool.query("DELETE FROM blogs WHERE id = $1", [id]);
//         res.json("Blog was deleted");
//         next();
//     } catch(error){
//         console.log(error.message);
//     }
// });

app.listen(PORT,() =>{
    console.log(`server running on port ${PORT}`);
});