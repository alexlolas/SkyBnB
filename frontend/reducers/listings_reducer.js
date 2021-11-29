import { RECEIVE_LISTING, 
         RECEIVE_ALL_LISTINGS,
         REMOVE_LISTING } from "../actions/listing_actions";

const listingReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
        return action.listings
    case RECEIVE_LISTING:
      return Object.assign({}, state, { [action.listing.id]: action.listing})
    case REMOVE_LISTING:
        delete nextState[action.listingId]
        return nextState
    default:
      return state;
  }
}

export default listingReducer

