 
import { useState } from "react"
import { createTask } from "../Redux/TasksReducer/Task.action"
import { SideBar } from "./SideBar"
import {  useDispatch } from "react-redux"


let obj={  
    email:"",
    title:"",
    desc:"",
}
export  const AddTask=()=>{
    const dispatch=useDispatch();

    const [data,setData]=useState(obj);
       
    const handelChange=(e)=>{
            const {name,value} = e.target;
            setData({...data,[name]:value});
            }
  // console.log(data)
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createTask(data)).then(()=>{alert("Task created successfully")})
    }

     return <div>
    <SideBar/>
    <form onSubmit={handleSubmit}>
    <h1>Add-Task </h1>
      <label>
        Email-Assigned-person:
        <input  name="email" type="email"   onChange={handelChange}/>
      </label>
      <label>
        Title:
        <input  name="title" type="text"  onChange={handelChange}/>
      </label>  
      <label>
        Description:
        <textarea  name="desc" type="text"  onChange={handelChange}/>
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
}