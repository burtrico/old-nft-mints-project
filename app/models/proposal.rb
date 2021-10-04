class Proposal < ApplicationRecord
  belongs_to :user
  has_many :proposal_votes
  has_many :users, through: :proposal_votes

  validates :token, presence: true
  validates :title, presence: true, uniqueness: :true
  validates :description, presence: true

end
