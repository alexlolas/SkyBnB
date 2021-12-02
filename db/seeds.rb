# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
User.destroy_all
Listing.destroy_all
Review.destroy_all

User.create!(email: 'DemoUser', first_name: 'DemoUser', last_name: 'DemoUser', password: 'DemoUser')
User.create!(email: 'samjones@gmail.com', first_name: 'Sam', last_name: 'Jones', password: 'password')
User.create!(email: 'alexanderlolas@gmail.com', first_name: 'Alex', last_name: 'Lolas', password: 'password')
User.create!(email: 'joeysmalls@aol.net', first_name: 'Joe', last_name: 'Big', password: 'password')

listing1 = Listing.create!(title: "Small house just outside of downtown San Francisco",
          description: "This is a very quiet neighborhood perfect for a relaxing weekend getaway! Enjoy a nice walk on the beach
          or a fancy dinner out on the town. Everything is accesible by a short car ride from this location! We have 2 bedrooms and 
          two full bathrooms, perfect for up to six guests!",
          state: "CA",
          city: "San Francisco",
          zip_code: 92345,
          address: "777 Sneath lane",
          price: 350,
          user_id: 1,
          rooms: 2,
          num_beds: 2,
          bathrooms: 2,
          capacity: 6,
          house_type: "Cottage",
          host_name: "Alex Lolas")

file1 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/sfhouse.jpg')
file2 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house1interior.jpg')
file3 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house1bedroom.jpg')
file4 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house1bedroom2.jpg')
file5 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house1kitchen-3.jpg')

listing1.photos.attach(io: file1, filename: 'file1.jpg')
listing1.photos.attach(io: file2, filename: 'file2.jpg')
listing1.photos.attach(io: file3, filename: 'file3.jpg')
listing1.photos.attach(io: file4, filename: 'file4.jpg')
listing1.photos.attach(io: file5, filename: 'file5.jpg')



listing2 = Listing.create!(title: "Get away to the city for a weekend!",
          description: "This place is great if you want to have a nice weekend in the city!
          We are walking distnace from the Marina, with plenty of night life to suit all of your needs",
          state: "CA",
          city: "San Francisco",
          zip_code: 91234,
          address: "325 sleep st",
          price: 750,
          user_id: 2,
          rooms: 3,
          num_beds: 4,
          bathrooms: 3,
          capacity: 9,
          house_type: "House",
          host_name: "Joe Ralph")

file1 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/testhouse2.jpg')
file2 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house2bedroom1.jpg')
file3 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house2bedroom2.jpg')
file4 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house2interior.jpg')
file5 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house2kitchen.jpg')

listing2.photos.attach(io: file1, filename: 'file1.jpg')
listing2.photos.attach(io: file2, filename: 'file2.jpg')
listing2.photos.attach(io: file3, filename: 'file3.jpg')
listing2.photos.attach(io: file4, filename: 'file4.jpg')
listing2.photos.attach(io: file5, filename: 'file5.jpg')

listing3 = Listing.create!(title: "Luxury house in a gated community!",
          description: "We are offering a massive house in one of San Franciscos nicest neighborhoods.
           We can host almost any part size and you wont be dissapointed with all our house has to offer.
           There are three stories with 5 rooms and 4 bathrooms and we are walking distance from nice restaurants",
          state: "CA",
          city: "San Francisco",
          zip_code: 93325,
          address: "18932 valley point dr",
          price: 1900,
          user_id: 3,
          rooms: 5,
          num_beds: 7,
          bathrooms: 4,
          capacity: 18,
          house_type: "House",
          host_name: "Fred Warner")


file1 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/testhouse3.jpg')
file2 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house3bedroom1.jpg')
file3 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house3bedroom2.jpg')
file4 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house3interior.jpg')
file5 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house3Kitchen.jpg')

listing3.photos.attach(io: file1, filename: 'file1.jpg')
listing3.photos.attach(io: file2, filename: 'file2.jpg')
listing3.photos.attach(io: file3, filename: 'file3.jpg')
listing3.photos.attach(io: file4, filename: 'file4.jpg')
listing3.photos.attach(io: file5, filename: 'file5.jpg')

listing4 = Listing.create!(title: "Small cottage in a quiet community!",
          description: "This place is great for a nice quiet weekend at home. It is a very
          cozy house with a feel good vibe. The community in the area is very quiet and keeps
          to themselves. Book today and enjoy your stay!",
          state: "CA",
          city: "San Francisco",
          zip_code: 12345,
          address: "2345 smith point dr",
          price: 350,
          user_id: 4,
          rooms: 2,
          num_beds: 2,
          bathrooms: 2,
          capacity: 6,
          house_type: "Cottage",
          host_name: "Joey Smith")


file1 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/testhouse4.jpg')
file2 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house4bedroom.jpg')
file3 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house4bedroom1.jpg')
file4 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house4interior.jpg')
file5 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house4kitchen.jpg')

listing4.photos.attach(io: file1, filename: 'file1.jpg')
listing4.photos.attach(io: file2, filename: 'file2.jpg')
listing4.photos.attach(io: file3, filename: 'file3.jpg')
listing4.photos.attach(io: file4, filename: 'file4.jpg')
listing4.photos.attach(io: file5, filename: 'file5.jpg')

# listing5 = Listing.create!(title: "Small house in decent condition",
#           description: "Have a great time at this small house in San Francisco! We are not
#           too worried about the conditions of the house, so feel free to have parties or do
#           whatever you feel like! You will only have to pay the cleaning fee, and please do not
#           damage anything.",
#           state: "CA",
#           city: "San Francisco",
#           zip_code: 94322,
#           address: "234 palm st",
#           price: 199,
#           user_id: 1,
#           rooms: 3,
#           num_beds: 4,
#           bathrooms: 3,
#           capacity: 8,
#           house_type: "House",
#           host_name: "Alex Smith")


# file1 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house5.jpg')
# file2 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house4bedroom.jpg')
# file3 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house4bedroom1.jpg')
# file4 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house4interior.jpg')
# file5 = URI.open('https://skybnb-seeds.s3.us-west-1.amazonaws.com/house4kitchen.jpg')

# listing4.photos.attach(io: file1, filename: 'file1.jpg')
# listing4.photos.attach(io: file2, filename: 'file2.jpg')
# listing4.photos.attach(io: file3, filename: 'file3.jpg')
# listing4.photos.attach(io: file4, filename: 'file4.jpg')
# listing4.photos.attach(io: file5, filename: 'file5.jpg')