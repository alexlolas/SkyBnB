class Api::ListingsController < ApplicationController

  def index 
    @listings = Listing.all
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
    render :show
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def update
    @listing = Listing.find_by(id: params[:id])
    if @listing && @listing.update(listing_params)
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def destroy
    @listing = Listing.find(params[:id])
    if @listing.destroy
      render :show
    else
      render json: @lisint.errors.full_messages, status: 401
    end
  end

  private

  def listing_params
    params.require(:listing).permit(:title, :description, 
                                    :state, :city, :zip_code, :address, 
                                    :price, :user_id, :rooms, :num_beds,
                                    :bathrooms, :capacity)
  end




end
