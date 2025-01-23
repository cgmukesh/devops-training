const express = require('express');
const { registerUser, loginUser, getUsers } = require('../controller/users');
const { userRegisterValidate, userLoginValidate } = require('../utils/userValiadation');
const { ensureAuthenticated } = require('../utils/auth');
const { addNewBlog, getBlogs, findByIdBlog, updateBlogById, deleteBlogById} = require('../controller/blogs');
const { uploadImage } = require('../controller/upload');
const { nodeMailer } = require('../controller/nodeMailer');
const routes = express.Router();



routes.post('/register', userRegisterValidate ,registerUser);

routes.post('/login', userLoginValidate, loginUser);

routes.get('/users', ensureAuthenticated, getUsers);

routes.get('/blogs', getBlogs);

routes.get('/blogs/:id', findByIdBlog);

routes.put('/blogs/:id', updateBlogById);

routes.delete('/blogs/:id', deleteBlogById);

routes.post('/blogs', addNewBlog);

routes.post('/email/send', nodeMailer);

routes.post('/upload', uploadImage)


module.exports = routes;