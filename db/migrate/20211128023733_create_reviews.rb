class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :review_title, null: false
      t.integer :rating, null: false
      t.string :body, null: false
      t.integer :listing_id, null: false
      t.integer :guest_id, null: false
      t.timestamps
    end
    add_index :reviews, :listing_id
    add_index :reviews, :guest_id
  end
end
