"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/see', (req, res) => {
    res.send('সব ইউজার');
});
router.post('/add', (req, res) => {
    res.send('নতুন ইউজার তৈরি হয়েছে');
});
exports.default = router;
