 
import { useEffect } from "react"
import { SideBar } from "./SideBar"
import { TaskCard } from "./TaskCard"
import { useSelector,useDispatch } from "react-redux"
import { getListofTask } from "../Redux/TasksReducer/Task.action"



export  const AllTask=()=>{
     const {taskList}=useSelector(state=>state.TaskReducer);
     console.log(taskList)
      const dispatch=useDispatch()
     useEffect(()=>{
     dispatch(getListofTask())
    },[dispatch]);
   
     return <div  >
        <SideBar/>
        <div>
            {taskList?.map((e,i)=>{
              return  <TaskCard data={e} key={i+1}/>
            })
            }   
        </div>
    </div>   
          
}