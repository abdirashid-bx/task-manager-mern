import Task from "../model/model.js"


export const getalltask=async(req,res)=>{
    try {
         
        const task=await Task.find()
        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({"messege":error})
    }
}
export const getspeciftask=async(req,res)=>{
    try {
         const id=req.params.id
         console.log("the id",id)
        const task=await Task.findById(id)
        if(!task){
           res.status(200).json({"messege": "doesn't exits this id"})   
        }
        console.log("the task",task)
        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({"messege":error})
    }
}
export const posttask=async(req,res)=>{
    try {
        console.log("the body",req.body)
        const task=await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({"messege":error})
    }
}
export const updatetask=async(req,res)=>{
    try {
         const id=req.params.id
         console.log("the id",id)
         const data=req.body
        const task=await Task.findByIdAndUpdate(id,data)
          const tasks=await Task.findById(id)
          if(!tasks){
              res.status(200).json({"messege": "doesn't exits this id"}) 
        }
         
        console.log("the task",task)
        res.status(200).json(tasks)
    } catch (error) {
        res.status(404).json({"messege":error})
    }
}
export const deletetask=async(req,res)=>{
    try {
         const id=req.params.id
        const task=await Task.findByIdAndDelete(id)
        if(!task){
              res.status(200).json({"messege": "doesn't exits this id"}) 
        }
        res.status(200).json({"messege": "deleted success"})
    } catch (error) {
        res.status(404).json({"messege":error})
    }
}

 