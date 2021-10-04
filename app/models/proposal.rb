class Proposal < ApplicationRecord
  belongs_to :user
  has_many :proposal_votes
  has_many :users, through: :proposal_votes

  
end
