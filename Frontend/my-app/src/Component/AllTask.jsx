 
import { useEffect } from "react"
import { SideBar } from "./SideBar"
import { TaskCard } from "./TaskCard"
import { useSelector,useDispatch } from "react-redux"
import { getListofTask } from "../Redux/TasksReducer/Task.action"



export  const AllTask=()=>{
     const state=useSelector(state=>state);
    const dispatch=useDispatch()
    useEffect(()=>{
     dispatch(getListofTask())
    },[dispatch]);
    console.log(state)
return <div  >
        <SideBar/>
        <div>
            <TaskCard/>
        </div>
    </div>   
          
}