const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    content: {
        type: String,
        default: true
    },
    title: {
        type: String,
        default: true
    },
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;