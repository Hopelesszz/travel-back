import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import User from '../models/User.js';
import { createError } from '../utils/error.js';

export const register = async (req, res ,next) => {   
    try{
        const existingUser = await User.findOne({
          $or: [{ email: req.body.email }, { username: req.body.username }]
        });

        if (existingUser) {
          return res.status(400).json({ message: "Username or Email already in use!" });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          ...req.body,
          password: hashedPassword,
        })
        await newUser.save();
        res.status(200).send("User has been created.");
    }
    catch(err) {
        onsole.log(err);
    }
    
}
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "User not found!"));
    
        const isPasswordCorrect = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (!isPasswordCorrect)
          return next(createError(400, "Wrong password or username!"));
    
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT
        );
    
        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
            secure: false, 
            sameSite: "strict",
          })
          .status(200)
          .json({ details: { ...otherDetails }, isAdmin });
    } catch (err) {
      next(err);
    }
}
export const logout = (req, res, next) => {
  res.clearCookie("access_token", {
    httpOnly: true,
    secure: false, 
    sameSite: "strict",
  })
  .status(200).json({ message: "User has been logged out" });
}