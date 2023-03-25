import React,{useEffect, useState} from "react"
import {  useNavigate } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'

import {useSelector,useDispatch} from "react-redux";
import { getListofTask } from "../Redux/TasksReducer/Task.action";
import { SideBar } from "./SideBar";
 
 

export const Home=()=>{

 const dispatch=useDispatch();
 const state= useSelector(state=>state)
console.log(state )


return <div >
     <div  >
     <ChakraProvider>
     <SideBar/>
     </ChakraProvider>
    {/* <div><button onClick={handelLogout}>Logout</button>
    <button onClick={()=>dispatch(getListofTask())}>Getlist</button></div> */}
     </div>
   
    
</div>

}