import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        required: true
    },
    parentId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Comment", 
        default: null 
    },
},{ timestamps: true })
export default mongoose.model("Comment", CommentSchema);