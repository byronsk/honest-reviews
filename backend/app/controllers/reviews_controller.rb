class ReviewsController < ApplicationController

  def index
    reviews = Review.all
    render json: reviews
  end

  def show
    review = Review.find_by(id: params[:id])
    if review
    render json: review
    else
      render json: {error: "Review not found."}, status: 404
    end
  end

  def new
    review = Review.new
    render json: review
  end

  def create
    review = Review.create(review_params)
    if review.save
      render json: review
    else
      render json: {error: "Review was not created"}, status: 400
    end
  end

  # def edit
  #   review = Review.find_by(id: params[:id])
  # end

  def update
    review = Review.find_by(id: params[:id])
    review.update(review_params)
    if review
      review.save
      render json: review
    else
      render json: {error: "Review not updated."}, status: 451
    end
  end

  def destroy
    review = Review.find_by(id: params[:id]).destroy
  end


  private

  def review_params
    params.require(:review).permit(:content, :product_id)
  end

end
