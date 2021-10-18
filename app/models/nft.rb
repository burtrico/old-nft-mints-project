class Nft < ApplicationRecord
  belongs_to :nft_contract
  belongs_to :user

end
