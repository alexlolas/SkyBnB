import React from "react";
import { Link } from "react-router-dom";
import {Minihouse, Star, Door, Calender} from '../svg/svg'
import ReviewIndexItem from "../review/review_index_item";
import ReviewsFormContainer from "../review/review_form_container"
import { FaStar } from 'react-icons/fa'


class ListingShow extends React.Component {
  constructor(props){
    super(props)
    

    
  }

  componentDidMount(){
    this.props.fetchListing(this.props.match.params.listingId)
  }
  render(){
    if (!this.props.listing) return null
    let inverseReview = []
    for (let i = this.props.reviews.length - 1; i >= 0 && inverseReview.length < 8; i--){
      inverseReview.push(this.props.reviews[i])
    }
    let leftReview = inverseReview.slice(0, 4)
    let rightReview = inverseReview.slice(4)

    let leftReviewBox = leftReview.map((review, idx) => {
      return (
        <ReviewIndexItem key={idx} deleteReview={this.props.removeReview} currentUser={this.props.currentUser} review={review} />

      )
    })
    let rightReviewBox = rightReview.map((review, idx) => {
      return (
        <ReviewIndexItem key={idx} deleteReview={this.props.removeReview} currentUser={this.props.currentUser} review={review} />

      )
    })
    let sum = 0
    let ratingAverage = this.props.reviews.forEach(review => {
      sum += review.rating
    });

    let average = sum / this.props.reviews.length
  
    // if (!this.props.users) return null
    return (
      <div className="index-show-box">

      <div className="index-show-container">
        <div className='listing-show-header'>
          <Link className='listings-index' to='/listings'> <i className="fas fa-angle-left"></i>All listings</Link>
          
          <h1 className='listing-show-title'>{this.props.listing.title}</h1>
          <div className='listing-show-location'><FaStar className="red-star"size={18} color={'red'} /> {!average ? 5 : average.toFixed(2)} ({this.props.reviews.length} reviews) · {this.props.listing.city}, {this.props.listing.state}, {this.props.listing.zipCode}</div>
          <div className="photo-box">
          <img className='listing-show-img' src={this.props.listing.photoUrls[0]} />
          <div className='listing-second-row'>

          <img className='second-box-items' src={this.props.listing.photoUrls[1]} />
           <img className='second-box-items-two' src={this.props.listing.photoUrls[2]} />
          </div>
          <div className='listing-third-row'>

          <img className='third-box-items' src={this.props.listing.photoUrls[3]} />
           <img className='third-box-items-two' src={this.props.listing.photoUrls[4]} />
          </div>
          </div>
          <div className="body-box">

          <div className='body-left-box'>

          <div className='listing-left-box'>
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
            <div className="reviews-box-left">
              <div className="review-item">{leftReviewBox}</div>
            </div>
            <div className='reviews-box-right'>
              <div className="review-item">{rightReviewBox}</div>

            </div>
          </div>
            
            <ReviewsFormContainer listingId={this.props.listing.id} currentUser={this.props.currentUser} />
            {this.props.listing.userId === this.props.currentUser ? (

              <button className="delete-listing-button" onClick={() => this.props.removeListing(this.props.listing.id).then((res) => {this.props.history.push(`/listings`)})}>Delete Listing</button>
            ) : null}
      </div>
          </div>
              <div className="reservations-box">

          <div className="top-level-box">
            <div className="top-level-left-box">

              ${this.props.listing.price} / night
            </div>
            <div className="top-level-right-box">

                  <FaStar className="red-star" size={14} color={'red'} /> {!average ? 5 : average.toFixed(2)} ({this.props.reviews.length} reviews)
            </div>
          </div>
          <div className="main-reservation-box">
            <div className="main-box-upperleft">
              <div className="upper-level-text">Check-In</div>
              <div className="lower-level-text">Add Date</div>
            </div>
            <div className="main-box-upperright">
                    <div className="upper-level-text">Checkout</div>
                    <div className="lower-level-text">Add Date</div>
            </div>

          </div>
          <div className="main-box-lower">
                  <div className="main-box-lowerleft">
              <div className="upper-level-text">Guests</div>
                <div className="lower-level-text">1 Guest</div>
                  </div>
                  <div className="main-box-lowerright">

                  <i className="fas fa-chevron-down"></i>
                  </div>
          </div>
          <div className='last-reservation-box'>
            <button className="reservation-submit" >Check Availability</button>
          </div>
              </div>
          </div>
        </div>
      </div>
      
      </div>
    )
  }
}

export default ListingShow