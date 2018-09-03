const express = require('express');
const Router = express.Router;
const router = Router();
const User = require('../models/User');
const tokenService = require("../tokenService");

router.post('/login', async (req, res, next) => {

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const match = await user.comparePassword(password);
      if (match) {
        const token = tokenService.create(user);
        const isAdmin = user.isAdmin
        res.status(200).send({ message: "success", payload: token, isAdmin: isAdmin })
      } else {
        throw new Error('unauthorized')
      }
    } else {
      throw new Error('Email not found');
    }
  } catch (e) {
    next(e);
  }

});

router.post("/signup", async (req, res, next) => {
  const { email, password, name } = req.body;

  const user = new User({
    email: email,
    password: password,
    name: name,
    isAdmin: false
  });

  try {
    const doc = await user.save();
    res.status(200).send({ message: "success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;