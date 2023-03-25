import React,{useEffect, useState} from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'

import {useSelector,useDispatch} from "react-redux";
import { getListofTask } from "../Redux/TasksReducer/Task.action";
import { SideBar } from "./SideBar";
import { AllTask } from "./AllTask";
import { AddTask } from "./AddTask";
 

export const Home=()=>{

 const dispatch=useDispatch();
 const state= useSelector(state=>state)
console.log(state )
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

return <div >
     <div  >
     <ChakraProvider>
     <SideBar/>
     </ChakraProvider>
    <div><button onClick={handelLogout}>Logout</button>
    <button onClick={()=>dispatch(getListofTask())}>Getlist</button></div>
     </div>
   
    
</div>

}