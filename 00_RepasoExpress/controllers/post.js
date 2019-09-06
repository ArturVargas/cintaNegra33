
const Post = require('../models/Post');

exports.newPost = (req, res) => {
    let params = req.body;
    if(params.title && params.body){
        let newPost = Post({
            ...params
        })
        newPost.save((err, post) => {
            if(err){
                res.status(500).send(err)
            }
            res.status(201).json({data: post})
        })
    } else {
        res.status(400).json({message: 'Datos Requeridos'})
    }
}

exports.listPosts = (req, res) => {
    Post.find().exec((err, posts) => {
        if(err){
            res.status(500).send(err)
        }
        res.status(200).json({data: posts})
    })
}

exports.post = (req, res) => {
    let id = req.params.id;
    Post.findById(id).populate('user').exec((err, post) => {
        if(err){
            res.status(500).send(err)
        }
        res.status(200).json({data: post})
    })
}