const express = require('express');
const { getPost, addPost, getAddPost, getEditPost, deletePost, getPosts } = require('../controllers/post-controller')

const router = express.Router();

router.get('/posts/:id', getPost)

router.post('/add-post', addPost)

router.get('/add-post', getAddPost)

router.get('/edit/:id', getEditPost)


router.delete('/posts/:id', deletePost)

router.get('/posts', getPosts)

module.exports = router