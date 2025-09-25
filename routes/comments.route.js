import express from 'express';
import { addComment, updateComment, deleteComment, getCommentsByPost, getOneComment, getComments } from '../controllers/comments.controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/getAllComments', getComments);
router.get('/getOneComment/:id', getOneComment);
router.get('/getCommentsByPost/:postId', getCommentsByPost);
router.delete('/deleteComment/:id', verifyToken, deleteComment);
router.put('/updateComment/:id', verifyToken, updateComment);
router.post('/addComment', verifyToken, addComment);

export default router;