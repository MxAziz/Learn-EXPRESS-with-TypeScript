"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const filePath = path_1.default.join(__dirname, "../db/todo.json");
app.get('/', (req, res) => {
    res.send('welcome to the Todo API');
});
app.get('/todos', (req, res) => {
    const data = fs_1.default.readFileSync(filePath, 'utf-8');
    console.log(data);
    res.json(data);
});
exports.default = app;
