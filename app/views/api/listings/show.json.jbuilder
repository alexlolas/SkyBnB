json.partial! 'listing', listing: @listing

# json.reviews @listing.reviews
json.reviews do 
  @listing.reviews.each do |review|
      json.set! review.id do 
        json.partial! 'api/reviews/review', review: review
      end
  end
end
json.banana {json.hello_world 'hello'}