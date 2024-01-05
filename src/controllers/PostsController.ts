import type { Request, Response } from 'express';

function postsController(req: Request, res: Response) {
    res.send('posts');
}

export default postsController;
