import express from 'express';
import { addUserAward,getOneUserAward,getUserAwards,updateUserAward,deleteUserAward } from '../controllers/userAward.controller.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/getAllAwards', getUserAwards);
router.get('/getOneAward/:id', getOneUserAward);
router.delete('/deleteAward/:id', verifyUser, deleteUserAward);
router.put('/updateAward/:id', verifyUser, updateUserAward);
router.post('/addAward', verifyUser, addUserAward);

export default router;