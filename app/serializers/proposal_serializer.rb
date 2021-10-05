class ProposalSerializer < ActiveModel::Serializer
  attributes :token
  attributes :title, :description, :status, :approve, :deny, :start_date, :end_date

  has_many :proposal_votes
  attribute :author

  def author
    object.user.username
  end

  def status
    if (object.active == true) { "Active" }
    else { "Closed" }
    end
  end

  def votes_for
    array = object.proposal_votes.map( |vote| do  
      if(vote.vote_to_approve == true) {vote.vote_to_approve.count}
      else {0}
      end )
   array.map(&:to_i).reduce(0, :+)
  end

  def votes_against
    array = object.proposal_votes.map( |vote| do  
      if(vote.vote_to_approve == false) {vote.vote_to_approve.count}
      else {0}
      end )
   array.map(&:to_i).reduce(0, :+)
  end

  def approve
    puts "#{votes_for.to_f / (votes_for + votes_against) * 100}%"
  end

  def deny
    puts "#{votes_against.to_f / (votes_for + votes_against) * 100}%"
  end


  # attributes :id, :token, :title, :description, :active, :approve, :deny, :start_date, :end_date
  # has_one :user
end
