import type { Request, Response } from 'express';

import prisma from '../lib/prismadb';

async function postsController(req: Request, res: Response) {
    const posts = await prisma.post.findMany();
    res.json(posts);
}

export default postsController;
