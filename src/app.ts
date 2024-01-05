import express, {
    type NextFunction,
    type Request,
    type Response,
} from 'express';
import morgan from 'morgan';

import route from './routes';

const app = express();
const port = 3000;

app.use(morgan('tiny'));
// Add this error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
});
// app.use(
//     express.urlencoded({
//         extended: true,
//     })
// );

route(app);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
