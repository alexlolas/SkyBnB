import sessionErrorReducer from "./session_errors_reducer";
import { combineReducers } from "redux";

const errorsReducer = combineReducers({
  session: sessionErrorReducer
  
})

export default errorsReducer