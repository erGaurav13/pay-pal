import React from 'react';
import {Routes,Route} from "react-router-dom";
import { AddTask } from '../Component/AddTask';
import { AllTask } from '../Component/AllTask';
import { Home } from '../Component/Home';
import { Login } from '../Component/Login';
import { Signup } from '../Component/Signup';


export  const AllRoutes=()=>{

 return <Routes>
      <Route path='/' element= {<Login/>}></Route>
      <Route path='/signup' element= {<Signup/>}></Route>
      <Route path="/home" element= {<Home/>}></Route>   
      <Route path="/alltask" element= {<AllTask/>}></Route> 
      <Route path="/addtask" element= {<AddTask/>}></Route> 
      <Route path="/updateassigne" element= {<Home/>}></Route> 
      </Routes>
}