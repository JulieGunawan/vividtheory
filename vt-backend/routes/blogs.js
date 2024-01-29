const express = require("express");
const router = express.Router();
// const Blog = require("../models/Blog");
const controller = require("../controllers/blogsController");

router.get("/", controller.getAllBlogs);
    

router.get("/:slug", controller.getOneBlog);


router.post("/", controller.createOneBlog);

router.put("/:id", controller.updateOneBlog);


module.exports= router;