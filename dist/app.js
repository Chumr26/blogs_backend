"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from 'cors';
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT;
// app.use(cors());
app.use((0, morgan_1.default)('tiny'));
// app.use(
//     express.urlencoded({
//         extended: true,
//     })
// );
(0, routes_1.default)(app);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
