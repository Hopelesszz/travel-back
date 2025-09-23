import express from 'express';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import awardRoutes from './routes/award.route.js';
import postRouter from './routes/post.route.js';
import commentsRoute from './routes/comments.route.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from "cors";

const app = express();
dotenv.config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB is connected.");
  } catch (error) {
    throw error
  }
}

app.use(cors({
  origin: "https://travel-front-sable.vercel.app/",
  credentials: true               
}));

app.use(cookieParser());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/awards', awardRoutes);
app.use('/posts', postRouter);
app.use('/comments', commentsRoute);

app.get('/', (req, res) => {
  res.send('Welcome to the API!');  
});  

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});     

app.listen(process.env.PORT || 8800, () => {
  connection();
  console.log('Server is running');
})

