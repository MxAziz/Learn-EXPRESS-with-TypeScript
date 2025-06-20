"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('welcome to the Products API');
});
router.post('/create-product', (req, res) => {
    res.send('create a new product');
});
router.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Route not found!',
    });
});
exports.default = router;
