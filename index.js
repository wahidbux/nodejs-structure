import express from 'express';
const router = express.Router();
import profile from './profile.js';
import userInfo from './user-info.js';
import students from './students.js';

router.get('/profile', profile);
router.get('/user-info', userInfo);
router.get('/students',students);



export default router;