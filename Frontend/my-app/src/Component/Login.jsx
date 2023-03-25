
import React, { useState } from "react";
import { useNavigate  } from "react-router-dom"
import  "../CSS/form.css"
let obj={  
    email:"",
    password:"",
}
export  const Login =()=>{
const [data,setData]=useState(obj)
const [loading,setLoading] = useState(false)
const navigate=useNavigate()

const handelChange=(e)=>{
const {name,value} = e.target;
setData({...data,[name]:value});
}

const handleSubmit= async(e)=>{
e.preventDefault();
try{
    setLoading(true);
    fetch("http://localhost:8080/user/login",{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            'content-type': 'application/json'
        }
     }).then((res)=>{
         return  res.json()
     }).then((response)=>{
        if(response.message=="Login Sucessfully"){
            alert(response.message);
            localStorage.setItem("token",JSON.stringify(response.token));
            navigate("/home")
        }else{
            alert(response.message)
        }
        setLoading(false);
     })
}catch(e){
    // console.log(e);
    setLoading(false);
}



}

if(loading){
    return <h1>Loading</h1>
}

 
return <div className="Box">
     
    <form onSubmit={handleSubmit}>
    <h1>Login </h1>
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