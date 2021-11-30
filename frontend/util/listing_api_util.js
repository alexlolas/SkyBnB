
export const createListing = listing => {
  debugger
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

export const updateListing = listing => (
    $.ajax ({
      method: 'PATCH',
      url: `/api/listings/${listing.id}`,
      data: {listing}
    })
)
