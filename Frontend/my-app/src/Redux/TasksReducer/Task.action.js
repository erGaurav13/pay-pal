import axios from "axios";
import { CREATE_TASK, GET_LIST_OF_TASK } from "./Task.actionTypes";

let baseurl = "http://localhost:8080";

const createTask = (info) => async (dispatch) => {
  try {
    let res = await axios.post(`${baseurl}/task/addtask`, info);
    console.log(res);
    getListofTask()
  } catch (e) {
    console.log(e);
  }
};

const getListofTask =(info) => async (dispatch) => {
  let data = await axios.get(`${baseurl}/task/listoftask`);
  console.log(data)
  dispatch({type:GET_LIST_OF_TASK,payload:data.data})
};


const updatetask =(info) => async (dispatch) => {
  let data = await axios.get(`${baseurl}/task/updatestatus`);
  console.log(data)
  dispatch({type:GET_LIST_OF_TASK,payload:data.data})
};

export { createTask, getListofTask ,updatetask};
