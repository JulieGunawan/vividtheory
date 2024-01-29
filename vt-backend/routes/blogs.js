const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const controller = require("../controllers/blogsController");

router.get("/", controller.getAllBlogs);
    

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
        console.log("here",req.body);
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