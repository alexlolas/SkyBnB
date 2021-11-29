import * as ReviewUtil from '../util/review_api.util'

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS'

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS, 
  reviews
})

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
})

export const fetchReview = review => dispatch => ReviewUtil.fetchReview(review)
  .then(review => dispatch(receiveReview(review)))

export const fetchReviews = () => dispatch => ReviewUtil.fetchReviews()
  .then(reviews => dispatch(receiveReviews(reviews)))

export const createReview = review => dispatch => ReviewUtil.createReview(review)
  .then(review => dispatch(receiveReview(review)))

export const updateReview = review => dispatch => ReviewUtil.updateReview(review)
  .then(review => dispatch(receiveReview(review)))

export const deleteReview = reviewId => dispatch => ReviewUtil.deleteReview(reviewId)
  .then(review => dispatch(removeReview(reviewId)))