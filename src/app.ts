import express, { Application, NextFunction, Request, Response } from 'express'
import path from 'path'
import fs from 'fs'
import userRoutes from './routes/userRoutes'
const app : Application = express()

app.use(express.json())

// const todosRouter = express.Router()
app.use('/users', userRoutes);

const filePath = path.join(__dirname, "../db/todo.json")

app.get('/users/see', (req : Request, res: Response) => {
  res.send('welcome to the Todo API')

})

app.get('/todos', (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, 'utf-8')
  // console.log(data);
  res.json(data);
})

app.get('/todos/:title/:body', (req: Request, res: Response) => {
  const title = req.params.title;
  console.log("from query:" , req.query);
  console.log( "from params:", req.params);
  const data = fs.readFileSync(filePath, 'utf-8')
  res.send(data);
})

//sob route ar niche and global err handler upore declare kora hoy
//404 route not found handler
app.use((req: Request, res: Response) => {
   res.status(404).json({message: 'Route not found'});
})


//global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke in app.ts file! ');
})

export default app;