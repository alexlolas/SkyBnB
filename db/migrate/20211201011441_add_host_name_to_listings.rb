class AddHostNameToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :host_name, :string, null: false
  end
end
