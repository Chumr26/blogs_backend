"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const UsersController_1 = __importDefault(require("../controllers/UsersController"));
router.get('/', UsersController_1.default.getAll);
exports.default = router;
