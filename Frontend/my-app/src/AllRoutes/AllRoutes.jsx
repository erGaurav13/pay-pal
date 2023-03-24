import React from 'react';
import {Routes,Route} from "react-router-dom";
import { Home } from '../Component/Home';
import { Login } from '../Component/Login';
import { Signup } from '../Component/Signup';


export  const AllRoutes=()=>{

 return <Routes>
      <Route path='/' element= {<Login/>}></Route>
      <Route path='/signup' element= {<Signup/>}></Route>
      <Route path="dashboard" element= {<Home/>}></Route>
      </Routes>
}