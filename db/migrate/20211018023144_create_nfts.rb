class CreateNfts < ActiveRecord::Migration[6.1]
  def change
    create_table :nfts do |t|
      t.belongs_to :nft_contract, null: false, foreign_key: true
      t.belongs_to :ens_domain, null: false, foreign_key: true
      t.string :name
      t.string :image_url
      t.string :collection_name
      t.string :background_color
      t.datetime :created_date
      t.decimal :price_current
      t.decimal :last_sale
      t.integer :num_sales

      t.timestamps
    end
  end
end
