import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const getUsers = async (req,res,next)=>{
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}
export const getOneUser = async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}
export const deleteUser = async (req,res,next)=>{
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}
export const updateUser = async (req,res,next)=>{
  try {
    let updateFields = { ...req.body };
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      updateFields.password = hashedPassword;
    }
    if(req.body.action === "default update") {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: updateFields,
          ...(req.body.awardId && { $push: { awards: req.body.awardId } })
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    }
    if(req.body.action === "add followers") {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { followers: req.body.followers } },
        { new: true }
      );  
      res.status(200).json(updatedUser);
    }
    if(req.body.action === "add following") {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { following: req.body.following } },
        { new: true }
      );  
      res.status(200).json(updatedUser);
    }
    if(req.body.action === "delete award") {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { awards: req.body.awardId }
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    }
    if(req.body.action === "delete followers") {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { followers: req.body.followers }
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    }
    if(req.body.action === "delete following") {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { following: req.body.following }
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    }
  } catch (err) {
    next(err);
  }
}