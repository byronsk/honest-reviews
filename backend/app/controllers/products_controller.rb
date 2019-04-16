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

  def new
    product = Product.new
    render json: product
  end

  def create
    product = Product.create(product_params)
    if product
      render json: product
    end
  end

  def update
    product = Product.find_by(id: params[:id])
    product.update(product_params)
    if product
      product.save
      render json: product
    else
      render json: {error: "Product not updated."}, status: 451
    end
  end

  def destroy
    product = Product.find_by(id: params[:id])
    product.destroy
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

  private

  def product_params
    params.require(:product).permit(:url, :name, :description, :likes)
  end

end
