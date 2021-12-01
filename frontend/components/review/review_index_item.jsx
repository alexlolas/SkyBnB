import React from "react";

const ReviewIndexItem = props => {
  return (
    <div>
      {props.review.title}
      {props.review.rating}
      {props.review.body}

    </div>
  )
}

export default ReviewIndexItem