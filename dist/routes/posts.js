"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const PostsController_1 = __importDefault(require("../controllers/PostsController"));
router.get('/more', PostsController_1.default.getMore);
router.get('/', PostsController_1.default.getAll);
exports.default = router;
