const express = require('express');
const Router = express.Router;
const router = Router();
const Blog= require('../models/Blog');
const User = require('../models/User');
const auth = require("../middleware/auth");

const findUserById = async (req, res, next) => {
  const { id } = req.token.user;
  try {
    const doc = await User.findById(id);
    if (!doc) {
      next(new Error('not found'));
    }

    if(doc.isAdmin){
      req.user = doc;
      next();
    }else{
      next(new Error('permissions not valid'));
    }
  } catch (e) {
    next(new Error(e));
  }
};

// Get all blogs
router.get('/', async (req, res, next) => {
  try {
    const docs = await Blog.find();
    res.status(200).send(docs);
  } catch (e) {
    next(e);
  }
});

//Create blog
router.post('/createBlog', auth, findUserById, async (req, res, next) => {

  const { title, content, author, image} = req.body;

  try {
    const new_blog = new Blog(
      {
        title: title,
        author: author,
        content: content,
        image: image,
        date: new Date()
      }
    );
    console.log(new_blog);
    const doc = await new_blog.save();
    res.status(200).send(doc);
  } catch (e) {
    next(e);
  }
});

//Delete blog
router.delete('/deleteBlog/:blog_id', auth, findUserById, async (req, res, next) => {

  const { blog_id } = req.params;
  
  try {
    const doc = await Blog.findByIdAndRemove({_id: blog_id});
    res.status(200).send(doc);
  } catch (e) {
    console.log(JSON.stringify(e));
    next(e);
  }
});

//Edit blog
router.get('/editBlogLoadData/:blog_id', auth, findUserById, async (req, res, next) => {

  const { blog_id } = req.params;
  
  try {
    const doc = await Blog.findOne({_id: blog_id});
    res.status(200).send(doc);
  } catch (e) {
    console.log(JSON.stringify(e));
    next(e);
  }
});

router.put('/editBlog/:_id', auth, findUserById, async (req, res, next) => {

  const { _id} = req.params;

  const updatedFieldsObj = {
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    image: req.body.image
  }

  try {
    const doc = await Blog.findOneAndUpdate({_id: _id}, updatedFieldsObj, { new: true });
    res.status(200).send(doc);
  } catch (e) {
    console.log(JSON.stringify(e));
    next(e);
  }
});

module.exports = router;