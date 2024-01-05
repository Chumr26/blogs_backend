import type { Request, Response } from 'express';

import prisma from '../lib/prismadb';

async function commentsController(req: Request, res: Response) {
    const comments = await prisma.comment.findMany();
    res.json(comments);
}

export default commentsController;
