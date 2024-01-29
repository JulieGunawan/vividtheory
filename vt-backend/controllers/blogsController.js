const Blog = require('../models/Blog');
const { Op } = require("sequelize");

module.exports = {
    getAllBlogs: async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 6;
        const startIndex = (page - 1) * limit;
        // const endIndex = page * limit;

        try{     
            const allBlogs = await Blog.findAll({
                order:[
                    ['published_at', 'DESC']
                ],
                limit: limit,
                offset: startIndex,
                
                where: {
                    deleted_at: {
                        [Op.is]: null,
                    },
                    published_at:{
                        [Op.ne]: null
                    }
                }
                  
            });
            
            res.json(allBlogs);
        } catch (err){
            console.log(err.message);
        }
    },
    getBlogBySlug: async (req, res) => {
      try{
        // console.log("here",req.params.slug);
          const blog = await Blog.findOne({where: {slug: req.params.slug}});
        //   console.log("blog is", blog);
          if (blog){
            res.json(blog);
        } else {
            res.status(404).json({message: "Blog not found"});
        }
      } catch(err){
          console.log(err.message);
      } 
    },
    getBlogById: async (req, res) => {
        try{
          console.log("here",req.params.id);
            const blog = await Blog.findOne({where: {id: req.params.id}});
          //   console.log("blog is", blog);
            if (blog){
              res.json(blog);
          } else {
              res.status(404).json({message: "Blog not found"});
          }
        } catch(err){
            console.log(err.message);
        } 
      },
    getRandomBlogs: async (req, res) => {
        try{
          console.log("random part");
        const randomBlogs = [];
        for (var i = 0; i < 4; i++) {
            const randomId = parseInt(Math.abs(Math.floor(Math.random() * 10) +1));
            console.log("random id is", randomId);
            const blog = await Blog.findOne({where: {id: randomId}});
            console.log("blog is", blog);
            randomBlogs.push(blog);
        }
        //   const randomId = Math.abs(Math.floor(Math.random() * 100) -2);
        //     const blog = await Blog.findOne({where: {id: randomId}});
            console.log("blog is", randomBlogs);
            if (randomBlogs){
              res.json(randomBlogs);
          } else {
              res.status(404).json({message: "Blog not found"});
          }
        } catch(err){
            console.log(err.message);
        } 
      },
    createOneBlog: async (req, res) => {
        try{
            const newBlog = await Blog.create(req.body);
            res.json(newBlog);
        }catch(err){
            console.log(err);
        }
    },
    updateOneBlog: async (req, res) =>{
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
    }

   
}