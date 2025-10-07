import express from 'express';
import { addUserAward,getOneUserAward,getUserAwards,updateUserAward,deleteUserAward,getUserAwardsByUser,getUserAwardsByUserAndAward } from '../controllers/userAward.controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/getUserAward', getUserAwardsByUserAndAward);
router.get('/getOneUserAward/:id', getOneUserAward);
router.get('/getUserAwardsByUser/:userId', getUserAwardsByUser);
router.delete('/deleteUserAward/:id', verifyToken, deleteUserAward);
router.put('/updateUserAward/:id', verifyToken, updateUserAward);
router.post('/addUserAward', verifyToken, addUserAward);

export default router;