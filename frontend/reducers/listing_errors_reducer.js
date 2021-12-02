import { RECEIVE_LISTING_ERRORS } from "../actions/listing_actions";
import listingReducer from "./listings_reducer";

const listingErrorsReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_LISTING_ERRORS:
      let listingErrors = {}
      action.errors.forEach(error => {
        let objectKey = error.split(' ')[0].toLowerCase()
        listingErrors[objectKey] = error
      })
      return listingErrors
    default:
      return state;
  }
}

export default listingErrorsReducer