class Review < ApplicationRecord
  validates :review_title, :body, :listing_id, :guest_id, presence: true
  validates :rating, inclusion: {in: (1..5)}, presence: true 

  belongs_to :listings,
    foreign_key: :listing_id,
    primary_key: :id,
    class_name: :Listing

  belongs_to :author, 
    foreign_key: :guest_id,
    primary_key: :id,
    class_name: :User
end
