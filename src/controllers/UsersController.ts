import type { Request, Response } from 'express';
import prisma from '../lib/prismadb';

async function userController(req: Request, res: Response) {
    const users = await prisma.customers.findMany();
    res.json(users);
}

export default userController;
