import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../CSS/TaskCard.css'
import { getListofTask, taskdelete, updateAssigne, updatetask } from '../Redux/TasksReducer/Task.action';

export const TaskCard=({data})=>{
const dispatch =useDispatch()

const {_id,email,title,desc,completed}=data;

 useEffect(()=>{

 },[dispatch])
// status update
const handelUpdate=(_id )=>{
    console.log(_id )
         dispatch(updatetask({_id})).then(()=>{ 
         dispatch(getListofTask())
        alert("Update Status of task")})
}

// update assigne email

const updateAssigneEmail =(_id)=>{
let email=prompt("please enter assigne email");
// console.log(email)
dispatch(updateAssigne({_id:_id,email:email})).then(()=>{
    dispatch(getListofTask())
    alert("Updated sucessfull")
})
}

const handelDelete=(_id)=>{
    dispatch(taskdelete({_id})).then(()=>{
        dispatch(getListofTask())
        alert("Deleted sucessfull")
    })
}

    return <div className='Box1'>
                 <div><ul>
                         <h3>Assign To : {email}</h3>
                         <p>Title : {title}</p>
                         <details> {desc} </details>
                         <h4>Status {completed ?"Completed":"Not-Completed"}</h4>
                         
                      </ul>
                     </div>


             <div className='btn'>
                 <button onClick={()=>updateAssigneEmail(_id)} >UpdateAssigne</button>
                 <button onClick={()=>handelUpdate(_id )}>Status</button>
                 <button onClick={()=>handelDelete(_id)} >Delete</button>

                </div>        
          </div>
}