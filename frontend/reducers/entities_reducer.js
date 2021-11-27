import usersReducer from "./users_reducer";
import listingReducer from "./listings_reducer";
import { combineReducers } from "redux";

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingReducer
})

export default entitiesReducer