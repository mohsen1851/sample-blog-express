const {storePostValidation} = require("../validations/post");
const PostModel = require("../models/post");
const {abort} = require("../helper");
const __ = require("lodash");

async function storePost(req, res) {
    const {error} = storePostValidation(req.body)
    if (error) return abort(res,422, error.message)
    let post = new PostModel({...__.pick(req.body,["title","body"]),user:req.body.user._id})
    res.send(await post.save())
}

async function getPosts(req, res) {
    let posts = await PostModel.find().populate({path:"user",select:['name','mobile']});
    res.send(posts)
}

module.exports = {storePost, getPosts}