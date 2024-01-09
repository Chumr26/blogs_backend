import type {
    Express,
    Handler,
    NextFunction,
    Request,
    Response,
} from 'express';
import usersRouter from './users';
import postsRouter from './posts';
import commentsRouter from './comments';

const allowCors =
    (fn: Handler) =>
    async (req: Request, res: Response, next: NextFunction) => {
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Allow-Origin', '*');
        // another common pattern
        // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader(
            'Access-Control-Allow-Methods',
            'GET,OPTIONS,PATCH,DELETE,POST,PUT'
        );
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        );
        if (req.method === 'OPTIONS') {
            res.status(200).end();
            return;
        }
        return await fn(req, res, next);
    };

function route(app: Express) {
    app.use('/users', allowCors(usersRouter));
    app.use('/posts', allowCors(postsRouter));
    app.use('/comments', allowCors(commentsRouter));
}

export default route;
