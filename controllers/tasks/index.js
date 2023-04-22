const dbData = require('../../templatedata')
const utilities = require('../../utilities/index')
const getAllTasks = (req,res)=>{
  console.log(dbData)
  res.send(dbData)
}

const getTaskById = (req,res)=>{
  console.log(req.params)
  const requiredTask = dbData.filter(task=>task.id==req.params.id)
  if(requiredTask.length>0){
    res.send(requiredTask)
  }
  else res.status(500).json({message:'data with id not found. Please send a valid id'})
}

const createTask = (req,res)=>{
  console.log(req.body,'body')
  if(typeof req.body!=='object' || (typeof req.body!=='object' && Object.values(req.body).length==0) || (typeof req.body!=='object' &&Object.values(req.body).length==0)|| utilities.checkField(req.body).includes(false)){
    res.status(422).json({message:'invalid syntax'})
  }
  else {

    const dataToBeModified = [...dbData]
    dataToBeModified.push(req.body)
    res.send(dataToBeModified)
  }
  // also can change the file data here
}

const editTaskById = (req, res)=>{
  if(typeof req.body!=='object' || (typeof req.body!=='object' && Object.values(req.body).length==0) || (typeof req.body!=='object' &&Object.values(req.body).length==0) || utilities.checkField(req.body).includes(false)){
    res.status(422).json({message:'invalid syntax'})
  }
  else {

    const dataToBeModified = [...dbData]
    const [task] = dataToBeModified.filter(task=>task.id==req.params.id)
    console.log(task,dataToBeModified)
    for (const field in task){
      console.log(task[field],req.body[field])
      if(task[field]!==req.body[field]) task[field]=req.body[field]  
    }
    res.send(dataToBeModified)
  }
}

const removeTaskById = (req,res)=>{
  const dataToBeModified = [...dbData]
  const modifiedTasks =dataToBeModified.filter(task=>task.id!=req.params.id)
  res.send(modifiedTasks)
}




module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  editTaskById,
  removeTaskById
}

