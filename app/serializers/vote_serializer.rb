class VoteSerializer < ActiveModel::Serializer
  attributes :id, :token, :count, :vote_to_approve, :user_id, :proposal_id
  # has_one :user
  # has_one :proposal
end
