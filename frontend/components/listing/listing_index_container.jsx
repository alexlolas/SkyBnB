import React from "react";
import { connect } from "react-redux";
import ListingIndex from "./listing_index";
import { fetchListings, removeListing } from "../../actions/listing_actions";

const mSTP = state => ({
  listings: Object.values(state.entities.listings),
  session: state.session.id
})


const mDTP = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  removeListing: listing => dispatch(removeListing(listing))
})


export default connect(mSTP, mDTP)(ListingIndex)

