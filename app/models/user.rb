class User < ApplicationRecord
    has_many :nfts, dependent: :destroy
    has_many :nft_contracts, through: :nfts

    validates :ens_domain, presence: true, uniqueness: true

    has_secure_password
end
