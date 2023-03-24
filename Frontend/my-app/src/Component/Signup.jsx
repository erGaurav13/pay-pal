import React, { useState } from "react";
import { useNavigate  } from "react-router-dom"
import  "../CSS/form.css"

let obj={
  username:"",
    email:"",
    password:"",
}
export  const Signup =()=>{
const [data,setData]=useState(obj);
const [loading,setLoading]=useState(false);
const navigate = useNavigate();
 
const handelChange=(e)=>{
const {name,value} = e.target;
setData({...data,[name]:value});
}

const handleSubmit=(e)=>{
e.preventDefault()
setLoading(true)
fetch("http://localhost:8080/user/signup",{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            'content-type': 'application/json'
        }
     }).then((res)=>{
         return  res.json()
     }).then((response)=>{
        console.log(response);
        setLoading(false)
        if(response.message=="Created sucessfully"){
           alert("Created sucessfully")
           navigate("/")
        }else{
            alert(response.message)
        }
     })
}

if(loading){
  return <h1>Loading</h1>
} 

return <div>
    
    <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
      <label>
        Name:
        <input  name="username" type="text"  onChange={handelChange}/>
      </label>
      <label>
        Email:
        <input  name="email" type="email"   onChange={handelChange}/>
      </label>
      <label>
        Password:
        <input  name="password" type="password"  onChange={handelChange}/>
      </label>
      <button    type="submit">Submit</button>
    </form>

</div>
}