const express = require('express');
const router = express.Router();
// const Blog = require("../models/Blog");
const controller = require('../controllers/blogsController');

router.get('/', controller.getAllBlogs);

router.get('/getBySlug/:slug', controller.getBlogBySlug);
router.get('/getById/:id', controller.getBlogById);
router.get('/random', controller.getRandomBlogs);
router.post('/', controller.createOneBlog);

router.put('/:id', controller.updateOneBlog);

module.exports = router;
