const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
});

const BlogModel = mongoose.model('Blog', BlogsSchema);
module.exports = BlogModel;
