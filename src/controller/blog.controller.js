
const { log } = require('console');
const blogModel = require('../models/blog.models');
const fs= require ('fs');
const path = require ('path');

exports.createBlog = async (req, res) => {
  try {
    console.log('Uploaded file:', req.file);

    const { blogTitle, blogDrescription } = req.body;

    // Validate fields
    if (!blogTitle) {
      return res.status(400).json({ msg: "Blog title is missing" });
    }

    if (!blogDrescription) {
      return res.status(400).json({ msg: "Blog description is missing" });
    }

    if (!req.file || !req.file.filename) {
      return res.status(400).json({ msg: "Image is missing" });
    }

    // Save blog
    const saveBlog = await new blogModel({
      blogTitle,
      blogDrescription,
      image: `http://localhost:4000/static/${req.file.filename}`,
    }).save();
    if(!saveBlog){
        res.status(400).json({
      msg: " Error from Blog saved",
        })
    }
    res.status(201).json({
      msg: "Blog saved successfully",
      data: saveBlog
    });

  } catch (error) {
    console.error('Error from createBlog:', error);
    return res.status(500).json({
      msg: 'Error while creating blog',
      error: error.message
    });
  }
};

exports.getAllblog= async (req, res) => {
  try {
    const allBlog= await blogModel.find();
    if(!allBlog){
        res.status(400).json({
      msg: " Error from get Blog ",
        })
    }
    res.status(201).json({
      msg: "Get Blog  successfully",
      data: allBlog
    });
  } catch (error) {
    console.error('Error from getvlog:', error);
    return res.status(500).json({
      msg: 'Error getblog',
      error: error.message
    });
  }
};

exports.getSingleblog= async (req, res) => {
  try {
    const {id}= req.params
    const singleBlog= await blogModel.findById(id);
    if(!singleBlog){
        res.status(400).json({
      msg: " Error from get single Blog ",
        })
    }
    res.status(201).json({
      msg: "Get single Blog  successfully",
      data: singleBlog
    });
  } catch (error) {
    console.error('Error from getvlog:', error);
    return res.status(500).json({
      msg: 'Error  get single blog',
      error: error.message
    });
  }
};

exports.updateBlog= async (req, res) => {
  try {
 const { blogTitle, blogDrescription } = req.body;

const {id}=req.params
//   check
const Blog= await blogModel.findById(id)

    Blog.blogTitle= blogTitle?blogTitle:Blog.blogTitle;
    Blog.blogDrescription= blogDrescription?blogDrescription:Blog.blogDrescription;

    if(req.file){
    
    
    
      const filename = Blog.image.split('/').pop();
    const tergetpath = path.join('public','tem', filename)
fs.unlinkSync(tergetpath);
    
    Blog.image= `http://localhost:4000/static/${req?.file?.filename}`

}else{
    Blog.image=Blog.image
}

    await Blog.save()

    if(!Blog){
        res.status(400).json({
      msg: " Error from update Blog ",
        })
    }
    res.status(201).json({
      msg: "update Blog  successfully",
      data: Blog
    });
   
  } catch (error) {
    console.error('Error from update blog:', error);
    return res.status(500).json({
      msg: 'Error update blog',
      error: error.message
    });
  }
};