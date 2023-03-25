const express=require("express");
const Tasks = require("../../Models/Task.Model")
const TaskRoute=express.Router();


TaskRoute.get("/",(req,res)=>{
    res.send("Task")
})

TaskRoute.get("/listoftask",async(req,res)=>{       
  try{
    const list= await Tasks.find({});
    return res.status(200).send(list)
  }catch(e){
    return res.status(501).send("server-error")
  }  
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

TaskRoute.post("/updatestatus",async(req,res)=>{

const {_id} = req.body;
console.log(_id,"id")
if(!_id ){
    return res.send("fiels required")
}

try{  const task= await Tasks.find({_id})
console.log(task[0])
      const update= await Tasks.findByIdAndUpdate({_id:_id},{completed:!task[0].completed})
      console.log(update)
      return res.send("Updated")
}catch(e){
    console.log(e)
return res.send(e)
}
})

TaskRoute.post("/updateassigne",async(req,res)=>{
    const {_id,email} = req.body;
    if(!_id||!email){
        return res.send("fiels required")
    }
    
    try{
          const update= await Tasks.findByIdAndUpdate({_id:_id},{email:email})
          return res.send({mes:"Update",update:update})
    }catch(e){
    return res.send(e)
    }
    })


TaskRoute.post("/delete",async(req,res)=>{
        const {_id } = req.body;
        console.log(_id)
        if(!_id ){
            return res.send("fiels required")
        } 
        try{
              const update= await Tasks.findByIdAndDelete({_id:_id})
              return res.send({mes:"Deleted",Deleted:update})
        }catch(e){
        return res.send(e)
        }
        })


module.exports=TaskRoute