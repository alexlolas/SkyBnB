class AddHouseTypeToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :house_type, :string
  end
end
