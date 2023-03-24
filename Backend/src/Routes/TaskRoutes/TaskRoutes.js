const express=require("express");
const Tasks = require("../../Models/Task.Model")
const TaskRoute=express.Router();


TaskRoute.get("/",(req,res)=>{
 


    res.send("Task")
})

TaskRoute.get("/listoftask",(req,res)=>{
 
    res.send([{name:"gaurav"},{name:"gaurav"}])
})

TaskRoute.post("/addtask",async (req,res)=>{
  
 const {email,title,desc }= req.body;
 if(!email||!title||!desc){
    return res.status(404).send({message:"Required all field"})
 }

 try{
   const newTask=await Tasks.create({email,title,desc});
   return res.status(201).send({message:"Task created successfully"})
 }catch(e){
   return res.status(404).send(e)
 }
     
})

module.exports=TaskRoute