import React from "react";
import { Link } from "react-router-dom";
import {Minihouse, Star, Door, Calender} from '../svg/svg'
import ReviewIndexItem from "../review/review_index_item";

class ListingShow extends React.Component {
  constructor(props){
    super(props)
 
  }

  componentDidMount(){
    this.props.fetchListing(this.props.match.params.listingId)
  }
  render(){
    if (!this.props.listing) return null
    if (!this.props.reviews) return null
    console.log(this.props)
    let reviewList = this.props.reviews.map(review => {
      return (
        <ReviewIndexItem review={review} />

      )
    })
    // if (!this.props.users) return null
    return (
      <div className="index-show-container">
        <div className='listing-show-header'>
          <Link className='listings-index' to='/listings'> <i className="fas fa-angle-left"></i>All listings</Link>
          
          <h1 className='listing-show-title'>{this.props.listing.title}</h1>
          <div className='listing-show-location'>· {this.props.listing.city}, {this.props.listing.state}, {this.props.listing.zipCode}</div>
          <img className='listing-show-img' src={this.props.listing.photoUrl} />
          <div className="show-intro">Entire residential {this.props.listing.houseType} hosted by {this.props.listing.hostName}</div>
        </div>
        <div className="listing-show-houseinfo">

        {this.props.listing.capacity}&nbsp;guests ·&nbsp;
        {this.props.listing.rooms}&nbsp; bedrooms ·&nbsp;
        {this.props.listing.numBeds} beds ·&nbsp;
        {this.props.listing.bathrooms}&nbsp; baths
        </div>
        <div className='mid-page-dash'></div>
        <div className="minihouse"> <Minihouse /></div>
        <div className="suitcase-text" >Entire home</div>
        <div className='suitcase-subtext'>You'll have the house to yourself.</div>
        <div className="star"> <Star /></div>
        <div className="suitcase-text" >Enhanced Clean</div>
        <div className='suitcase-subtext'>This Host committed to Skybnb's 5-step enhanced cleaning process.</div>
        <div className="star"> <Door /></div>
        <div className="suitcase-text" >Self check-in</div>
        <div className='suitcase-subtext'>Check yourself in with the lockbox.</div>
        <div className="star"> <Calender /></div>
        <div className="suitcase-text" >Free cancellation for 48 hours</div>
        <div className='mid-page-dash'></div>
        <div className="listing-description">{this.props.listing.description}</div>
        <div className='mid-page-dash'></div>
        <div className="amentities-head">What this place offers</div>
        <div className='show-amentities'>
        <div className='amentities-box'>
          <div className='amentities-left-box'>
          <div className='amentities-row-two'>· Kitchen </div>
            <div className='amentities-row-two'>· Free parking on premises</div>
          <div className='amentities-row-two'>· TV</div>
          <div className='amentities-row-two'>· Dryer</div>
          <div className='amentities-row-two'>· Patio or balcony</div>
            </div>
          
          <div className='amentities-right-box'>
            <div className='amentities-row-two'>· Wifi</div>
            <div className='amentities-row-two'>· Private pool</div>
            <div className='amentities-row-two'>· Washer</div>
          
          <div className='amentities-row-two'>· Air conditioning</div>
          
          <div className='amentities-row-two'>· Security Camera on property</div> 
          </div>
          </div>
          <div className='mid-page-dash'></div>
          <div className="reviews-box">
            <div className="reviews-header">
              {reviewList}
            </div>
            
          
          </div>
      </div>
      </div>
    )
  }
}

export default ListingShow