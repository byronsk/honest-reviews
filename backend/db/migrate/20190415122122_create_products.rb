class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :url
      t.string :name
      t.string :description
      t.integer :likes

      t.timestamps
    end
  end
end
