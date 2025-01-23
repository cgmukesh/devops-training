const BlogModel = require('../models/blogsModel');

module.exports = {
    addNewBlog: async (req,res)=>{
        const blogModel = new BlogModel(req.body);
        try{
            const response = await blogModel.save();
            return res.status(201).json({message:'success', data: response});
        }catch(err){
            return res.status(500).json({message: 'error', err});
        }
    },

    getBlogs : async(req,res)=>{
        try{
            const users = await BlogModel.find().select('-__v');
            return res.status(200)
                .json({data: users});
        }catch(err){
            return res.status(500)
                .json({message:'error', err});
        } 
    },

    findByIdBlog : async(req,res)=>{
        const id = req.params.id; 
        try {
            const blog = await BlogModel.findById(id).select('-__v');;
            if (!blog) {
                return res.status(404).json({ message: 'Blog not found' });
            }
            return res.status(200).json({ data: blog });
        } catch (err) {
            console.error('Error finding blog by ID:', err);
            return res.status(500).json({ message: 'Internal server error', error: err.message });
        }
    },

    updateBlogById : async (req, res) => {
        const id = req.params.id;
        try {
          let blog = await BlogModel.findById(id);
          
          if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
          }
          
          blog.title = req.body.title; 
          blog.body = req.body.body; 
          blog.image = req.body.image; 
          
          await blog.save();
          const updatedBlog = await BlogModel.findById(id).select('-__v');
          return res.status(200).json({ data: updatedBlog });
        } catch (err) {
          console.error('Error updating blog by ID:', err);
          return res.status(500).json({ message: 'Internal server error', error: err.message });
        }
    },

    deleteBlogById : async (req, res) => {
        const id = req.params.id;
        
        try {
          const blog = await BlogModel.findById(id);

          if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
          }

          await BlogModel.deleteOne({ _id: id });

          return res.status(200).json({ message: 'Blog deleted successfully' });
        } catch (err) {
          console.error('Error deleting blog by ID:', err);
          return res.status(500).json({ message: 'Internal server error', error: err.message });
        }
    }

}