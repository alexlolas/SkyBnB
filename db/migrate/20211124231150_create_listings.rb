class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
        t.string :title, null: false
        t.text :description, null: false
        t.string :state, null: false
        t.string :city, null: false
        t.integer :zip_code, null: false
        t.string :address, null: false
        t.integer :price, null: false
        t.integer :user_id, null: false
        t.integer :rooms, null: false
        t.integer :num_beds, null: false
        t.integer :bathrooms, null: false
        t.integer :capacity, null: false
      t.timestamps
    end
    add_index :listings, :user_id
  end
end
