import express from 'express';
const router = express.Router();
import basicApis from './api/basic-apis/index.js';
import info from './api/info/index.js';

router.use('/api/basic', basicApis);
router.use('/api/info', info);

export default router;
