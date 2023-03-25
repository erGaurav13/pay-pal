
import {
  Box,
  Flex,
  Button, 
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
 
import {Link, useNavigate} from "react-router-dom"
 



export   function SideBar() {
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
 
  

  return (
    <>
      <Box   px={4}  mt="10px" >
        <Flex h={16} alignItems={'center'} justifyContent={'space-around'}  >  
           <Button  bgColor={"black"}  >DashBoard </Button>
           <Link to="/alltask" >  <Button  bgColor={"black"}  > All-Task   </Button></Link>
           <Link to="/addtask" >  <Button  bgColor={"black"}  >ADD-TASK </Button></Link>  
           <Link to="/" >  <Button  bgColor={"black"}  onClick={handelLogout} >Logout </Button></Link>   
        </Flex>
      </Box> 
    </>
  );
}