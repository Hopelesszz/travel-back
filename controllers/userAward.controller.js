import UserAward from "../models/UserAward";

export const getUserAwards = async (req,res,next) => {
    try {
        const userAwards = await UserAward.find();
        res.status(200).json(userAwards);
    } catch (err) {
        next(err);
    }
}
export const getOneUserAward = async (req,res,next) => {
    try {
        const userAward = await UserAward.findById(req.params.id);
        res.status(200).json(userAward);
    } catch (err) {
        next(err);
    }
}
export const getUserAwardsByUser = async (req,res,next) => {
    try {
        const userAward = await UserAward.find({ userId: req.params.userId })
        res.status(200).json(userAward);
    } catch (err) {
        next(err);
    }
}
export const addUserAward = async (req,res,next) => {
    try {
        const newUserAward = new UserAward(req.body);
        await newUserAward.save();
        res.status(200).json(newUserAward);
    } catch (err) {
        next(err);
    }
}
export const updateUserAward = async (req,res,next) => {
    try {
        const updatedUserAward = await UserAward.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );    
        res.status(200).json(updatedUserAward);
    }
    catch (err) {
        next(err);
    } 
}
export const deleteUserAward = async (req,res,next) => {
    try {
        await UserAward.findByIdAndDelete(req.params.id);
        res.status(200).json("User award has been deleted.");
    } catch (err) {
        next(err);
    }
}