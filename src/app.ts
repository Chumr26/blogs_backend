import express, {
    type NextFunction,
    type Request,
    type Response,
} from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

import route from './routes';

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(morgan('tiny'));
// app.use(
//     express.urlencoded({
//         extended: true,
//     })
// );

route(app);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
