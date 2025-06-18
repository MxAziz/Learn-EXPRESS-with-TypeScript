"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// const todosRouter = express.Router()
app.use('/users', userRoutes_1.default);
const filePath = path_1.default.join(__dirname, "../db/todo.json");
app.get('/users/see', (req, res) => {
    res.send('welcome to the Todo API');
});
app.get('/todos', (req, res) => {
    const data = fs_1.default.readFileSync(filePath, 'utf-8');
    // console.log(data);
    res.json(data);
});
app.get('/todos/:title/:body', (req, res) => {
    const title = req.params.title;
    console.log("from query:", req.query);
    console.log("from params:", req.params);
    const data = fs_1.default.readFileSync(filePath, 'utf-8');
    res.send(data);
});
//sob route ar niche and global err handler upore declare kora hoy
//404 route not found handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
//global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke in app.ts file! ');
});
exports.default = app;
