
import {
  Box,
  Flex,
  Button, 
} from '@chakra-ui/react';
 
import {Link} from "react-router-dom"
 



export   function SideBar() {
  return (
    <>
      <Box   px={4}  mt="10px" >
        <Flex h={16} alignItems={'center'} justifyContent={'space-around'}  >  
           <Button  bgColor={"black"}  >DashBoard </Button>
           <Link to="/alltask" >  <Button  bgColor={"black"}  > All-Task   </Button></Link>
           <Link to="/addtask" >  <Button  bgColor={"black"}  >ADD-TASK </Button></Link>  
           <Link to="/update" >  <Button  bgColor={"black"}  >Update assigne </Button></Link>   
        </Flex>
      </Box> 
    </>
  );
}