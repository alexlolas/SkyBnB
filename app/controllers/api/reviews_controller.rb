class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update 
    @review = Review.find(params[:id])

    if @review && @review.update(review_params)
      render :show
    else  
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.all
    render :index
  end

  def destroy
    @review = Review.find(params[:id])
    
    if @review.destroy
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  private

  def review_params
    params.require(:review).permit(:review_title, :rating, :body, :listing_id, :guest_id)
  end

end
