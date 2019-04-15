class ProductsController < ApplicationController

  def index
    products = Product.all
    render json: products
  end

  def show
    product = Product.find_by(id: params[:id])
    if product
    render json: product
    else
      render json: {error: "Product not found."}, status: 404
    end
  end

  def increase_likes
    product = Product.find_by(id: params[:product_id])
    if product
      product.likes += 1
      product.save
      render json: product
      else
        render json: {error: "Product not found."}, status: 404
    end
  end


end
