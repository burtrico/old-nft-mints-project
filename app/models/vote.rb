class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :proposal

  validates :proposal_id, uniqueness: { scope: [:user_id], message: "can't vote for the same proposal twice" }
end
