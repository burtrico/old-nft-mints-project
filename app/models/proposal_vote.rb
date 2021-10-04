class ProposalVote < ApplicationRecord
  belongs_to :user
  belongs_to :proposal
end
