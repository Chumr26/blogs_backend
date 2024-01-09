"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("./users"));
const posts_1 = __importDefault(require("./posts"));
const comments_1 = __importDefault(require("./comments"));
function route(app) {
    app.use('/users', users_1.default);
    app.use('/posts', posts_1.default);
    app.use('/comments', comments_1.default);
}
exports.default = route;
