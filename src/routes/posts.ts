import express from 'express';
const router = express.Router();

import postsController from '../controllers/PostsController';

router.get('/', postsController);

export default router;
