import mongoose from 'mongoose';

const UserAwardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    achievementId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Award"
    },
    progress: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
},{ timestamps: true })
export default mongoose.model("UserAward", UserAwardSchema);