const Blog = require('../models/Blog');

module.exports = {
    getAllBlogs: async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 6;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        try{     
            const allBlogs = await Blog.findAll({
                order:[
                    ['published_at', 'DESC']
                ]
            });
            
            const publishedBlogs = allBlogs.filter((blog) => blog.published_at != null && blog.deleted_at == null);

            const results = publishedBlogs.slice(startIndex, endIndex);

            console.log("page",page);
            console.log("limit",limit);
            console.log("start",startIndex);
            console.log("end",endIndex);
            
            res.json(results);
        } catch (err){
            console.log(err.message);
        }
    },
    getOneBlog: async (req, res) => {
      try{
        console.log("here",req.params.slug);
          const blog = await Blog.findOne({where: {slug: req.params.slug}});
          console.log("blog is", blog);
          if (blog){
            res.json(blog);
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