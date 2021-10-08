class ProposalIndexSerializer < ActiveModel::Serializer
  attributes :id, :token
  attributes :title, :description, :status
  # attributes :votes_for
  attributes :approve, :deny
  attributes :start_date, :end_date
  attribute :author
  # attribute :user_is_creator

  has_many :votes
 

  def author
    object.user.username
  end

  def user_is_creator
    current_user == object.user
  end

  def status
    if object.active == true 
      "Active" 
    else
      "Closed" 
    end
  end

  def votes_for
    array = object.votes.map do |vote| 
      if vote.vote_to_approve == true 
        vote.count
      else 
        0
      end 
    end
   array.map(&:to_i).reduce(0, :+)
  end

  def votes_against
    array = object.votes.map do |vote|  
      if vote.vote_to_approve == false
         vote.count
      else 
        0
      end 
    end
   array.map(&:to_i).reduce(0, :+)
  end

  def approve
    num = votes_for.to_f / (votes_for + votes_against) * 100
    # number_to_percentage(num, precision: 1)
    '%.2f' % num
  end

  def deny
    num = votes_against.to_f / (votes_for + votes_against) * 100
    '%.2f' % num
  end

  

  # attributes :id, :token, :title, :description, :active, :approve, :deny, :start_date, :end_date
  # has_one :user

end
