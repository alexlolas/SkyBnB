import React from "react";
import { connect } from "react-redux";
import { updateListing, fetchListing } from "../../actions/listing_actions";
import ListingForm from "./listing_form";


class EditListingForm extends React.Component{
  componentDidMount(){
    this.props.fetchListing(this.props.match.params.listingId)
  }

  render(){
    const {action, formType, listing} = this.props
    
    if (!listing) return null;
    

    return (
      <ListingForm action={action} formType={formType} listing={listing} />
    )
  }
}


const mSTP = (state, ownProps) => {

  return {
  
    listing: state.entities.listings[ownProps.match.params.listingId],
    formType: 'Update Listing'
  }
    
}

const mDTP = dispatch => ({
  fetchListing: listing => dispatch(fetchListing(listing)),
  action: listing => dispatch(updateListing(listing))
})

export default connect(mSTP, mDTP)(EditListingForm)

