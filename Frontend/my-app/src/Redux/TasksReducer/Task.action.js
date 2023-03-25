import axios from "axios";
import {  GET_LIST_OF_TASK } from "./Task.actionTypes";

let baseurl = "http://localhost:8080";


const getListofTask =() => async (dispatch) => {
  let data = await axios.get(`${baseurl}/task/listoftask`);
  console.log(data)
  dispatch({type:GET_LIST_OF_TASK,payload:data.data})
};

const createTask = (info) => async (dispatch) => {
  try {
    let res = await axios.post(`${baseurl}/task/addtask`, info);
    console.log(res);
    getListofTask()
  } catch (e) {
    console.log(e);
  }
};




const updatetask =(info) => async (dispatch) => {
  console.log(info)
  let data = await axios.post(`${baseurl}/task/updatestatus`,info);
  
 getListofTask()
};

const updateAssigne =(info) => async (dispatch) => {
  let data = await axios.post(`${baseurl}/task/updateassigne`,info);
  console.log(data)
  
};

const taskdelete =(info) => async (dispatch) => {
  console.log(info,"DD")
  let data = await axios.post(`${baseurl}/task/delete`,info);
  console.log(data)
  
};

export { createTask, getListofTask ,updatetask, taskdelete,updateAssigne };
