json.extract! listing,  
            :id,
            :title, 
            :price, 
            :description, 
            :rooms, 
            :bathrooms, 
            :user_id,
            :city,
            :state,
            :zip_code,
            :address,
            :num_beds,
            :capacity

  #  json.photos listing.photos.map {|photo| url_for(photo)}
