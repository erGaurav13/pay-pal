import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import { SideBar } from "./SideBar";

export const Home=()=>{

return <div >
     <div  >
     <ChakraProvider>
     <SideBar/>
     </ChakraProvider>
       <div style={{margin:"auto",textAlign:"center",marginTop:"20px",fontSize:"20px" }}>
        <h1>Welcome to the Task-Planner</h1>
       </div>
     </div>   
</div>

}