import React from "react";
import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { createReview } from "../../actions/review_actions";
import {openModal} from '../../actions/modal_actions'

const mSTP = (state, ownProps) => ({
    review: {
    reviewTitle: '',
    rating: '',
    body: '',
    name: '',
      listingId: parseInt(ownProps.listingId),
    guestId: state.session.id
  }
})

const mDTP = dispatch => ({
  createReview: review => dispatch(createReview(review))
})

export default connect(mSTP, mDTP)(ReviewForm)