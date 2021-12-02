import * as ListingUtil from '../util/listing_api_util'

export const RECEIVE_LISTING = 'RECEIVE_LISTING'
export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS'
export const REMOVE_LISTING = 'REMOVE_LISTING'
export const RECEIVE_LISTING_ERRORS = 'RECEIVE_LISTING_ERRORS'


export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
})

export const receiveAllListings = listings => ({
  type: RECEIVE_ALL_LISTINGS,
  listings
})

export const deleteListing = listingId => ({
  type: REMOVE_LISTING,
  listingId
})

export const receiveListingErrors = errors => ({
  type: RECEIVE_LISTING_ERRORS,
  errors
})


export const fetchListing = listing => dispatch => ListingUtil.fetchListing(listing)
  .then(listing => dispatch(receiveListing(listing)))

export const fetchListings = () => dispatch => ListingUtil.fetchListings()
  .then(listings => dispatch(receiveAllListings(listings)))

export const removeListing = listingId => dispatch => ListingUtil.removeListing(listingId)
  .then(listing => dispatch(deleteListing(listingId)))

export const createListing = listing => dispatch => ListingUtil.createListing(listing)
  .then(listing => dispatch(receiveListing(listing)))

export const updateListing = listing => dispatch => ListingUtil.updateListing(listing)
  .then(listing => dispatch(receiveListing(listing)))

