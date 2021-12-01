import React from "react";
import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { createReview } from "../../actions/review_actions";
import {openModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
  console.log(ownProps)
  return {
    review: {
    reviewTitle: '',
    rating: '',
    body: '',
      listingId: parseInt(ownProps.listingId),
    guestId: state.session.id
  }
}
}

const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review))
})

export default connect(mSTP, mDTP)(ReviewForm)