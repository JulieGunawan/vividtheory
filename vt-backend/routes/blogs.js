
const express = require("express");
const router = express.Router();
// const db = require("../db");
const Blog = require("../models/Blog");
// const Sequelize = require("sequelize");

router.get("/", async (req, res) => 
    Blog.findAll()
    .then((blogs) => {
        console.log(blogs);
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log(err);
    }));

module.exports= router;