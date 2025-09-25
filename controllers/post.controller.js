import Post from "../models/Post.js";

export const getPosts = async (req,res,next) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        next(err);
    }
}
export const getOnePost = async (req,res,next) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        next(err);
    }
}
export const getPostsByUser = async (req,res,next) => {
    try {
        const posts = await Post.find({ authorId: req.params.userId });
        res.status(200).json(posts);
    } catch (err) {
        next(err);
    }   
}
export const addPost = async (req,res,next) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(200).json(newPost);
    } catch (err) {
        next(err);
    }
}
export const updatePost = async (req,res,next) => {
    try {
        if(req.body.action === "default update") {
            const updatedPost = await Post.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );    
            res.status(200).json(updatedPost);
        }
        if(req.body.action === "like") {
            const updatedPost = await Post.findByIdAndUpdate(
                req.params.id,
                { $addToSet: { likes: req.body.userId } },
                { new: true }
            );    
            res.status(200).json(updatedPost);
        }
        if(req.body.action === "add comment") {
             const updatedPost = await Post.findByIdAndUpdate(
                req.params.id,
                { $addToSet: { comments: req.body.commentId } },
                { new: true }
            );  
            res.status(200).json(updatedPost);
        }
        if(req.body.action === "delete comment") {
            const updatedPost = await Post.findByIdAndUpdate(
                req.params.id,
                { $pull: { comments: req.body.commentId } },
                { new: true }
            );    
            res.status(200).json(updatedPost);
        }
        if(req.body.action === "cancel like") {
            const updatedPost = await Post.findByIdAndUpdate(
                req.params.id,
                { $pull: { likes: req.body.userId } },
                { new: true }
            );    
            res.status(200).json(updatedPost);
        }
    }
    catch (err) {
        next(err);
    } 
}
export const deletePost = async (req,res,next) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedPost);
    } catch (err) {
        next(err);
    }
}