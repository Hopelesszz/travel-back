import express from 'express';
import { addPost, deletePost, getPosts, getOnePost, updatePost, getPostsByUser } from '../controllers/post.controller.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/getAllPosts', getPosts);
router.get('/getOnePost/:id', verifyUser, getOnePost);
router.get('/getPostsByUser/:userId', verifyUser, getPostsByUser);
router.delete('/deletePost/:id', verifyUser, deletePost);
router.put('/updatePost/:id', verifyUser, updatePost);
router.post('/addPost', verifyUser, addPost);

export default router;