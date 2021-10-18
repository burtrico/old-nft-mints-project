class NftSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :collection_name, :background_color, :created_date, :price_current, :last_sale, :num_sales
  has_one :nft_contract
  has_one :ens_domain
end
