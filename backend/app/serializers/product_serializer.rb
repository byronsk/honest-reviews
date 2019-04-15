class ProductSerializer < ActiveModel::Serializer
  attributes :id, :url, :name, :description, :likes, :reviews
end
