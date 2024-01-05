import type { Request, Response } from 'express';

function commentsController(req: Request, res: Response) {
    res.send('comments');
}

export default commentsController;
