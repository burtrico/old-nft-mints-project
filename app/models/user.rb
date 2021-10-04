class User < ApplicationRecord
    has_many :proposal_votes
    has_many :proposals, through: :proposal_votes

    
end
