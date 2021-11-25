class Listing < ApplicationRecord
validates :title, :description, :state, :city, :zip_code, presence: true
validates :address, :price, :user_id, :rooms, :num_beds, presence: true
validates :bathrooms, :capacity, presence: true

  belongs_to :users,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: :User


#  Listing.Create!({title: 'townhouse', description: 'big house', state: 'California', city: 'Millbrae', zip_code: 94030, address: 'home', price: 100, user_id: 2, rooms: 3, num_beds: 5, bathrooms: 3, capacity: 5}) 
end