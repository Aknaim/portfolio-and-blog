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
    const docs = await Blog.find().populate('comments');
    res.status(200).send(docs);
  } catch (e) {
    next(e);
  }
});

//Create blog

router.post('/', auth, findUserById, async (req, res, next) => {

  const { title, content } = req.body;

  try {
    const new_blog = new Blog(
      {
        title: title,
        content: content
      }
    );

    const doc = await new_blog.save();
    res.status(200).send(doc);
  } catch (e) {
    next(e);
  }
});

module.exports = router;