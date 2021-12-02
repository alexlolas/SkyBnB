import React from "react";
import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { createReview } from "../../actions/review_actions";
import {openModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
  return {
    review: {
    rating: '',
    body: '',
    name: '',
      listingId: parseInt(ownProps.listingId),
      guestId: ownProps.currentUser
  },
  currentUser: state.session.id

  }
}

const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  openModal: (e) => dispatch(openModal(e))
})

export default connect(mSTP, mDTP)(ReviewForm)