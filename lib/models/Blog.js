const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        default: true
    },
    author: {
        type: String,
        default: true
    },
    content: {
        type: String,
        default: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;