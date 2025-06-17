import express, { Application, Request, Response } from 'express'
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

export default app;