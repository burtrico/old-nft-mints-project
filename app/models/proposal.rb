class Proposal < ApplicationRecord
  belongs_to :user
  has_many :votes
  has_many :users, through: :votes

  validates :token, presence: true
  validates :title, presence: true, uniqueness: :true
  validates :description, presence: true
  # validates :start_date, :end_date, presence: true
end
