import express from 'express';
const router = express.Router();


import about from './about.js';
import test from './test.js';
import insert from './insert.js';
import update from './update.js';
import select from './select.js';
import _delete from './delete.js';


router.post('/about', about);
router.get('/test', test);
router.post('/insert',insert);
router.post('/update',update);
router.post('/select',select);
router.post('/delete',_delete);

export default router;