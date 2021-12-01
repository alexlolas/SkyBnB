
export const createListing = listing => {
   return $.ajax({
    method: 'POST',
    url: '/api/listings',
    data: listing,
    contentType: false,
    processData: false
  })
}

export const fetchListing = listing => (
  $.ajax ({
    method: 'GET',
    url: `/api/listings/${listing}`
  })
)

export const removeListing = listingId => (
  $.ajax ({
    method: 'DELETE',
    url: `/api/listings/${listingId}`
  })
)

export const fetchListings = () => (
  $.ajax ({
    method: 'GET',
    url: '/api/listings'
  })
)

export const updateListing = (listing, listingId) => {
   return  $.ajax ({
      method: 'PATCH',
      url: `/api/listings/${listing.get('id')}`,
      data: listing,
      contentType: false,
      processData: false
    })
  }
