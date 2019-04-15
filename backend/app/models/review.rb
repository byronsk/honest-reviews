class Review < ApplicationRecord
  belongs_to :product

  validates :content, presence: true
  validates :product_id, presence: true
end
