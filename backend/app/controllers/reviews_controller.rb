class ReviewsController < ApplicationController

  def index
    reviews = Review.all
    render json: reviews
  end

  def create
    review = Review.new(content: params[:content], product_id: params[:product_id], username: params[:username])
    if review.save
      render json: review
    else
      render json: {error: "Review was not created"}, status: 400
    end
  end
end
