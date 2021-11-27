import React from "react";
import { connect } from "react-redux";
import ListingIndex from "./listing_index";
import { fetchListings } from "../../actions/listing_actions";

const mSTP = state => ({
  listings: Object.values(state.entities.listings)
})


const mDTP = dispatch => ({
  fetchListings: () => dispatch(fetchListings())
})


export default connect(mSTP, mDTP)(ListingIndex)

