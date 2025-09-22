import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        required: true
    },
    images: {
        type: [String],
    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
    },
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Comment",
    },
},{ timestamps: true })
export default mongoose.model("Post", PostSchema);