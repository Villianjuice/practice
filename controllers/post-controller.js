const createPath = require('../helpers/create-path')
const Post = require('../models/post')

const getPost = (req, res) => {
    const title = 'Post'
    Post
        .findById(req.params.id)
        .then(post => res.render(createPath('post'), {title, post}))
        .catch(err => {
            console.log(err)
            res.render(createPath('error'), { title: 'Error' });
        })
}

const addPost = (req, res) => {
    const { title, author, text } = req.body;
    const post = new Post({ title, author, text });
    post
        .save()
        .then((result) => res.redirect('/posts'))
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'), { title: 'Error' });
        })
}

const getAddPost =  (req, res) => {
    const title = 'Add Post'

    res.render(createPath('add-post'), {title})
}

const getEditPost = (req, res) => {
    const title = 'Edit post'
    Post
        .findById(req.params.id)
        .then(post => res.render(createPath('edit-post'), {title, post}))
        .catch(err => {
            console.log(err)
            res.render(createPath('error'), { title: 'Error' });
        })
}

const deletePost = (req, res) => {
    Post
        .findByIdAndDelete(req.params.id)
        .then(result => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log(err)
            res.render(createPath('error'), { title: 'Error' });
        })
}

const getPosts =  (req, res) => {
    const title = 'Posts'

    Post
        .find()
        .sort({createdAt: -1})
        .then(posts => res.render(createPath('posts'), {title, posts}))
        .catch(err => {
            console.log(err)
            res.render(createPath('error'), { title: 'Error' });
        })
}

module.export = {
    getPost,
    addPost,
    getAddPost,
    getEditPost,
    deletePost,
    getPosts
}