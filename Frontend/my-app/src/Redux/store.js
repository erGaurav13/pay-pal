import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk";
import { TaskReducer } from "./TasksReducer/Task.Reducer";

const store =legacy_createStore(combineReducers({
    TaskReducer
     
}),compose(applyMiddleware(thunk)))

export default store