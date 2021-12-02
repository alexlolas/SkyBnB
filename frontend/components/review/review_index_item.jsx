import React from "react";
import { FaStar } from 'react-icons/fa'

const ReviewIndexItem = props => {
  
  let stars = []
  for (let i = 0; i < props.review.rating; i++) {
    stars.push(<FaStar key={i} size={20} color={'red'} />)
  }

  while (stars.length < 5) {
    let i = stars.length
    stars.push(<FaStar key={i} size={20} color={'#e9e9e9'} />)
  }
  console.log(props.currentUser)
  console.log(props.review.guestId)
  return (
    <div className="review-index-box">
      <div className="review-index-name"> {props.review.name}</div>
      <div className="review-index-description">{props.review.body}</div>
      <div className="review-index-rating">{stars}</div>
      {props.currentUser === props.review.guestId ? (
        <button className="delete-review" onClick={() => props.deleteReview(props.review.id)}>Delete </button>
      ): null}
      <br />
      <br />
      <br />
      

    </div>
  )
}

export default ReviewIndexItem