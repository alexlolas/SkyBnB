class RemoveReviewTitleFromReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :review_title, :string
  end
end
