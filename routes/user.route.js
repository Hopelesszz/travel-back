import express from 'express';
import { deleteUser, getOneUser, getUsers, updateUser,searchUsers } from '../controllers/user.controller.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/getAllUsers', getUsers);
router.get('/getOneUser/:id', getOneUser);
router.get('/search', searchUsers);
router.delete('/deleteUser/:id', deleteUser);
router.put('/updateUser/:id', verifyUser, updateUser);

export default router;

//https://api.cloudinary.com/v1_1/dhe6tnpg0/image/upload