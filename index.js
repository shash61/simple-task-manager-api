const express = require('express')
const app = express()
const PORT = 5055
const taskRouter = require('./routes/tasks')


app.get('/',(req,res)=>{
  res.send('hello taskmanager app')
})

app.use(express.json())
app.use('/tasks', taskRouter)


// app.use(express.urlencoded({ extended: true }))

app.listen(PORT,()=>{
  console.log(`listening on ${PORT}`)
})

