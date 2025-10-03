import mongoose from 'mongoose';

const AwardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    target: {
        type: Number,
        required: true
    }
},{ timestamps: true })
export default mongoose.model("Award", AwardSchema);