import express from 'express';
import { login, logout, register } from '../controllers/auth.controller.js';
import { verifyToken, verifyUser } from '../utils/verifyToken.js';
import { get } from 'mongoose';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout/:id', logout);
router.get('/checkToken',  (req, res) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.json({ status: false });
    } 
    else {
        return res.json({ status: true });
    }
});

export default router;