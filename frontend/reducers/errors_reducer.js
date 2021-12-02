import sessionErrorReducer from "./session_errors_reducer";
import listingErrorsReducer from "./listing_errors_reducer";
import { combineReducers } from "redux";

const errorsReducer = combineReducers({
  session: sessionErrorReducer,
  listing: listingErrorsReducer
  
})

export default errorsReducer