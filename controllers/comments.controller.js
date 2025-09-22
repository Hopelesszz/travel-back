import Comment from '../models/Comment.js';

export const getComments = async (req, res, next) => {  
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (err) {
        next(err);
    }       
};
export const getOneComment = async (req,res,next) => {
    try {
        const comment = await Comment.findById(req.params.id);
        res.status(200).json(comment);
    } catch (err) {
        next(err);
    }
}
export const getCommentsByPost = async (req, res, next) => {  
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.status(200).json(comments);
    } catch (err) {
        next(err);
    }       
};  
export const addComment = async (req, res, next) => {  
    try {
        const newComment = new Comment(req.body);   
        await newComment.save();
        res.status(200).json(newComment);
    } catch (err) {
        next(err);
    }               
};
export const updateComment = async (req, res, next) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );    
        res.status(200).json(updatedComment);
    }
    catch (err) {
        next(err);
    } 
};
export const deleteComment = async (req, res, next) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id); 
        res.status(200).json({message: "Comment has been deleted.", deletedCommentId: deletedComment._id});
    } catch (err) {
        next(err);
    }       
};