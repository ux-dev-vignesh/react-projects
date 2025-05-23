import express from 'express';
import { getmenus } from '../controllers/menuController.js';

const router = express.Router();

router.get('/',getmenus);

export default router;