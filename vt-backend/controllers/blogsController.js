const Blog = require('../models/Blog');

module.exports = {
    getAllBlogs: async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 6;
        
        // const {page,limit} = req.query;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        try{     
            const allBlogs = await Blog.findAll({
                order:[
                    ['published_at', 'DESC']
                ]
            });
            
            const publishedBlogs = allBlogs.filter((blog) => blog.published_at != null && blog.deleted_at == null);
            // if (endIndex <await result.length){
            //     publishedBlogs.next = {
            //         page:page+1,
            //         limit: limit
            //     }
            // }

            // if (startIndex > 0){
            //     publishedBlogs.previous = {
            //         page:page-1,
            //         limit: limit
            //     }
            // }
            const results = publishedBlogs.slice(startIndex, endIndex);

            console.log(results);
            
            res.json(results);
        } catch (err){
            console.log(err.message);
        }
    },
    // getOneBlog: async (req, res) => {
    //   try{
    //       const blogs = await Blog.findOne({where: {id: req.params.id}});
    //   } catch(err){
    //       console.log(err.message);
    //   } 
    // }

}