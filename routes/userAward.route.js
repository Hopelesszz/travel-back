import express from 'express';
import { addUserAward,getOneUserAward,getUserAwards,updateUserAward,deleteUserAward,getUserAwardsByUser,getUserAwardsByUserAndAward } from '../controllers/userAward.controller.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/getUserAward', getUserAwardsByUserAndAward);
router.get('/getOneUserAward/:id', getOneUserAward);
router.get('/getUserAwardsByUser/:userId', getUserAwardsByUser);
router.delete('/deleteUserAward/:id', verifyUser, deleteUserAward);
router.put('/updateUserAward/:id', verifyUser, updateUserAward);
router.post('/addUserAward', verifyUser, addUserAward);

export default router;