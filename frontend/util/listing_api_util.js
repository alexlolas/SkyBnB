export const createListing = listing => (
  $.ajax({
    method: 'POST',
    url: '/api/listings',
    data: {listing}
  })
)

export default fetchListing = listing => (
  $.ajax ({
    method: 'GET',
    url: `/api/listings/${listing}`
  })
)

export default deleteListing = listingId => (
  $.ajax ({
    method: 'DELETE',
    url: `/api/listings/${listingId}`
  })
)

export default fetchListings = () => (
  $.ajax ({
    method: 'GET',
    url: '/api/listings'
  })
)

export default updateListing = listing => (
    $.ajax ({
      method: 'UPDATE',
      url: `/api/listings/${listing.id}`,
      data: {listing}
    })
)
