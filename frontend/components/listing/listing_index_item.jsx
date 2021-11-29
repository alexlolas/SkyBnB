import React from "react";
import { Link } from "react-router-dom";

class ListingIndexItem extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  render() {
    const { listing } = this.props
    return (
      <div className='listing-box'>
      <Link className='index-item-box' to={`/listings/${listing.id}`}>
          <div className="listing-title">{listing.title}</div>
        <br />
        Holds &nbsp;{listing.capacity}
        <br />
        {listing.rooms}&nbsp;Rooms&nbsp;&nbsp;
        {listing.bathrooms}&nbsp;Bathrooms
        {listing.userId === this.props.session ? (

          <button onClick={() => this.props.deleteListing(listing.id)}>Delete Listing</button>
        ) : null}
        </Link>
      </div>
    )
  }
}

export default ListingIndexItem