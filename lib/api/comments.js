const express = require('express');
const Router = express.Router;
const router = Router();
const Blog= require('../models/Blog');
const Comment= require('../models/Comment');
const auth = require("../middleware/auth");

const findUserById = async (req, res, next) => {
  const { id } = req.token.user;
  try {
    const doc = await User.findById(id);
    if (!doc) {
      next(new Error('not found'));
    }
    req.user = doc;
    next();
  } catch (e) {
    next(new Error(e));
  }
};


//Create comment

router.post('/', auth, findUserById, async (req, res, next) => {

  const { content, blog } = req.body;

  try {
    const new_comment = new Comment(
      {
        content: content,
        blog: blog,
        user: req.user_id
      }
    );

    const doc = await new_comment.save();

    const doc_blog = await Blog.findOneAndUpdate({_id: blog}, { "$push": { "comments": doc._id } });

    res.status(200).send(doc);
  } catch (e) {
    next(e);
  }
});

module.exports = router;