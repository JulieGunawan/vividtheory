
const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

router.get("/", async (req, res) => {
    try{
        const blogs = await Blog.findAll();
        res.json(blogs);
    } catch (err){
        console.log(err);
    }
});
    

router.get("/:slug", async (req, res) => {
    try{
        const blog = await Blog.findOne({where: {slug: req.params.slug}});
        if (blog){
            res.json(blog);
        } else {
            res.status(404).json({message: "Blog not found"});
        }
    }catch(err){
        console.log(err);
    }
});

router.post("/", async (req, res) => {
    try{
        const newBlog = await Blog.create(req.body);
        res.json(newBlog);
    }catch(err){
        console.log(err);
    }
});

router.put("/:id", async (req, res) =>{
    try{
        const updatedBlog = await Blog.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(updatedBlog);
    }catch(err){
        console.log(err);
    }
});


module.exports= router;