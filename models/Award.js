import mongoose from 'mongoose';

const AwardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    progress: {
        current: { type: Number, default: 0 },   
        target: { type: Number, required: true } 
    },
    status: {
        type: String,
        required: true
    },
},{ timestamps: true })
export default mongoose.model("Award", AwardSchema);