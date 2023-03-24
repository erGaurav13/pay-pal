import React,{useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
export const Home=()=>{
 const init= JSON.stringify(localStorage.getItem("token"));
 const [token,setToken]=useState(init)   
 const navigate=useNavigate()
 
 const handelLogout=()=>{
    localStorage.setItem("token",false);
    setToken(false)
 }

useEffect(()=>{
    if(!token){
        navigate("/")
    }
},[navigate, token])

return <div>
    <h1>Welcome to pococare</h1>
    <button onClick={handelLogout}>Logout</button>
</div>

}