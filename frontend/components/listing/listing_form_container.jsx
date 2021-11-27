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
    userId: '',
    rooms: '',
    numBeds: '',
    bathrooms: '',
    capacity: ''
  },
  formType: 'CreateListing'
})

const mDTP = dispatch => ({
  action: listing => dispatch(createListing(listing))
})

export default connect(mSTP, mDTP)(ListingForm)