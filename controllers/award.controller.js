import Award from "../models/Award.js";

export const getAwards = async (req,res,next) => {
    try {
        const awards = await Award.find();
        res.status(200).json(awards);
    } catch (err) {
        next(err);
    }
}
export const getOneAward = async (req,res,next) => {
    try {
        const award = await Award.findById(req.params.id);
        res.status(200).json(award);
    } catch (err) {
        next(err);
    }
}
export const getAwardsByUser = async (req,res,next) => {
    try {
        const award = await Award.find({ userId: req.params.userId })
        res.status(200).json(award);
    } catch (err) {
        next(err);
    }
}
export const addAward = async (req,res,next) => {
    try {
        const newAward = new Award(req.body);
        await newAward.save();
        res.status(200).json(newAward);
    } catch (err) {
        next(err);
    }
}
export const updateAward = async (req,res,next) => {
    try {
        const updatedAward = await Award.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );    
        res.status(200).json(updatedAward);
    }
    catch (err) {
        next(err);
    } 
}
export const deleteAward = async (req,res,next) => {
    try {
        await Award.findByIdAndDelete(req.params.id);
        res.status(200).json("Award has been deleted.");
    } catch (err) {
        next(err);
    }
}