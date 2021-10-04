class ProposalVoteSerializer < ActiveModel::Serializer
  attributes :id, :token, :count, :approve
  has_one :user
  has_one :proposal
end
