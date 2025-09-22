import express from 'express';
import { addComment, updateComment, deleteComment, getCommentsByPost, getOneComment, getComments } from '../controllers/comments.controller.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/getAllComments', getComments);
router.get('/getOneComment/:id', getOneComment);
router.get('/getCommentsByPost/:postId', getCommentsByPost);
router.delete('/deleteComment/:id', verifyUser, deleteComment);
router.put('/updateComment/:id', verifyUser, updateComment);
router.post('/addComment', verifyUser, addComment);

export default router;