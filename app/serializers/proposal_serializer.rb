class ProposalSerializer < ActiveModel::Serializer
  attributes :id, :token, :title, :description, :active, :approve, :deny, :start_date, :end_date
  has_one :user
end
