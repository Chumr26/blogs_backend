import express from 'express';
const router = express.Router();

import usersController from '../controllers/UsersController';

router.get('/', usersController);

export default router;
