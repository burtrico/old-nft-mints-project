class VoteSerializer < ActiveModel::Serializer
  attributes :id, :token, :count, :vote_to_approve
  has_one :user
  has_one :proposal
end
