import express from 'express';
import { addPost, deletePost, getPosts, getOnePost, updatePost, getPostsByUser } from '../controllers/post.controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/getAllPosts', getPosts);
router.get('/getOnePost/:id', verifyToken, getOnePost);
router.get('/getPostsByUser/:userId', verifyToken, getPostsByUser);
router.delete('/deletePost/:id', verifyToken, deletePost);
router.put('/updatePost/:id', verifyToken, updatePost);
router.post('/addPost', verifyToken, addPost);

export default router;