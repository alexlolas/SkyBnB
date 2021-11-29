import usersReducer from "./users_reducer";
import listingReducer from "./listings_reducer";
import reviewReducer from "./reviews_reducer";
import { combineReducers } from "redux";

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingReducer,
  reviews: reviewReducer
})

export default entitiesReducer