import express from 'express';
import { addAward, deleteAward, getAwards, getOneAward, getAwardsByUser, updateAward } from '../controllers/award.controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/getAllAwards', getAwards);
router.get('/getOneAward/:id', getOneAward);
router.get('/getAwardsByUser/:userId', verifyToken, getAwardsByUser);
router.delete('/deleteAward/:id', verifyToken, deleteAward);
router.put('/updateAward/:id', verifyToken, updateAward);
router.post('/addAward', verifyToken, addAward);

export default router;