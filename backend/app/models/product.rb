class Product < ApplicationRecord
  has_many :reviews

  validates :url, presence: true
  validates :name, presence: true
  validates :description, presence: true
  validates :likes, presence: true

end
