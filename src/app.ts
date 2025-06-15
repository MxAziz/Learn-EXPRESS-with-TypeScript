import express, { Application, Request, Response } from 'express'
import path from 'path'
import fs from 'fs'
const app : Application = express()

app.use(express.json())

const filePath = path.join(__dirname, "../db/todo.json")

app.get('/', (req : Request, res: Response) => {
  res.send('welcome to the Todo API')

})

app.get('/todos', (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, 'utf-8')
  console.log(data);
  res.json(data);
})

export default app;