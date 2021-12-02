import React from "react";
import { Link } from "react-router-dom";

class ListingIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { listing } = this.props
    return (
      <div className='listing-box'>
        <img className='listing-img' src={listing.photoUrls[0]}/>
      <Link className='index-item-box' to={`/listings/${listing.id}`}>
          <div className='listing-location'>Entire residential home in {listing.city}</div>
          <div className="listing-title">{listing.title}</div>
          <div className='random-dash'></div>
          <div className='listing-info'>
            {listing.capacity}&nbsp;guests · House ·&nbsp;
            {listing.rooms}&nbsp; bed ·&nbsp;
        {listing.bathrooms}&nbsp; bath
            </div>
        <div className='anemeties'>Wifi · Air conditioning · Free parking</div>
          <div className='listing-cost'>${listing.price}&nbsp;
            <div className='price-text'>/&nbsp;night</div></div>
        </Link>
      </div>
    )
  }
}

export default ListingIndexItem