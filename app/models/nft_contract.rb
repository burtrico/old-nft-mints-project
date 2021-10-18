class NftContract < ApplicationRecord
    belongs_to :user
    has_many :nfts, dependent: :destroy
    has_many :ens_domains, through: :nfts, source: :user
    
end
