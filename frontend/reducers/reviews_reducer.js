import { RECEIVE_REVIEW,
         RECEIVE_REVIEWS, 
         REMOVE_REVIEW} from '../actions/review_actions'
import { RECEIVE_LISTING } from '../actions/listing_actions'


const reviewReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review })
    case REMOVE_REVIEW:
      delete nextState[action.reviewId]
      return nextState
    case RECEIVE_LISTING:
      if (action.listing.reviews){

        return action.listing.reviews
      } else {
        return {}
      }
    default:
      return state;
  }
}

export default reviewReducer