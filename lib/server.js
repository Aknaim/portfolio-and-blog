const express = require('express');
const app = express();
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/portfolio-and-blog';
const PORT = 5000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use('/users', require('./api/users'));
app.use('/blogs', require('./api/blogs'));
app.use('/comments', require('./api/comments'));

app.use((err, req, res, next) => {
  res.status(500).json({ err: err.toString() });
})

app.listen(PORT, async () => {
  await mongoose.connect(uri);
  console.log(`Listening on ${PORT}`);
})