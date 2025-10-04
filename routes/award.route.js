import express from 'express';
import { addAward, deleteAward, getAwards, getOneAward, updateAward } from '../controllers/award.controller.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/getAllAwards', getAwards);
router.get('/getOneAward/:id', getOneAward);
router.delete('/deleteAward/:id', verifyUser, deleteAward);
router.put('/updateAward/:id', verifyUser, updateAward);
router.post('/addAward', verifyUser, addAward);

export default router;