import type { Request, Response } from 'express';

function userController(req: Request, res: Response) {
    res.send('user2');
}

export default userController;
