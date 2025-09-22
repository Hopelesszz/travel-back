import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    awards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Awards"
    }]
},{ timestamps: true })
export default mongoose.model("User", UserSchema);