import { connect } from "react-redux";
import React from "react";
import ListingForm from "./listing_form";
import { createListing,  } from "../../actions/listing_actions";

const mSTP = state => ({
  listing: {
    title: '',
    description: '',
    state: '',
    city: '',
    zipCode: '',
    address: '',
    price: '',
    userId: state.session.id,
    rooms: '',
    numBeds: '',
    bathrooms: '',
    capacity: '',
    houseType: '',
    hostName: '',
    photoFile: null
  },
  formType: 'Create Listing'
})

const mDTP = dispatch => ({
  action: listing => dispatch(createListing(listing))
})

export default connect(mSTP, mDTP)(ListingForm)