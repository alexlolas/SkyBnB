import React from "react";
import { fetchListing, removeListing } from "../../actions/listing_actions";
import { connect } from "react-redux";
import ListingShow from "./listing_show";

const mSTP = (state, ownProps) => {
  return {

    currentUser: state.session.id,
    listing: state.entities.listings[ownProps.match.params.listingId],
    reviews: Object.values(state.entities.reviews)
    }
}

const mDTP = dispatch => ({
  fetchListing: listing => dispatch(fetchListing(listing)),
  removeListing: listing => dispatch(removeListing(listing))
})

export default connect(mSTP, mDTP)(ListingShow)