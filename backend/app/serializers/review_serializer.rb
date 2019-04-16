class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :product_id
end
