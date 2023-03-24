import { GET_LIST_OF_TASK } from "./Task.actionTypes"


 const init={
    taskList:[],   
 }

export const TaskReducer=(state=init,action)=>{

 switch(action.type){
 case GET_LIST_OF_TASK:{
return  {
         ...state,taskList:action.payload
        }
 }
   
 default:{
        return state
    }
 }

}

  