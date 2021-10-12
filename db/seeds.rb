# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "Burt", email: "burtrico@gmail.com", password: "1234")
user2 = User.create(username: "Dakota", email: "dakota@flatironschool.com", password: "1234")
user3 = User.create(username: "Sam", email: "sam.boahen@flatironschool.com", password: "1234")
user4 = User.create(username: "Marc", email: "marc.majcher@flatironschool.com", password: "1234")
user5 = User.create(username: "Shivang", email: "shivang.dave@flatironschool.com", password: "1234")
user6 = User.create(username: "Ray", email: "rayisdabomb@gmail.com", password: "1234")

proposals1 = Proposal.create(token: "lyra", title: "Establish the Lyra DAO", 
description: "Establish the first Lyra DAO with a multi-sig of 5 council members.", 
 active: true,
#  Time.now.strftime("%m/%d/%Y %H:%M")
  start_date: "10/06/2021 14:30",
end_date: "11/06/2021 12:00",
user: user1 )

vote1 = Vote.create(user: user5, user_id: user5.id, proposal_id: proposals1.id, token: "lyra", count: 2500, vote_to_approve: true)
vote2 = Vote.create(user: user2, user_id: user2.id, proposal_id: proposals1.id, token: "lyra", count: 3500, vote_to_approve: true)
vote3 = Vote.create(user: user3, user_id: user3.id, proposal_id: proposals1.id, token: "lyra", count: 150, vote_to_approve: false)
vote4 = Vote.create(user: user4, user_id: user4.id, proposal_id: proposals1.id, token: "lyra", count: 1200, vote_to_approve: true)

proposals2 = Proposal.create(token: "snx", title: "Reduce the number of the Synthetix DAO's treasury multi-sigs", 
  description: "Reduce the number of Synthetix DAO's treasury multi-sigs from 7 to 3 members.", 
   active: true,
  #  Time.now.strftime("%m/%d/%Y %H:%M")
    start_date: "10/10/2021 14:45",
  end_date: "11/10/2021 12:30",
  user: user3 )

  vote5 = Vote.create(user: user1, user_id: user1.id, proposal_id: proposals2.id, token: "snx", count: 2100, vote_to_approve: false)
  vote6 = Vote.create(user: user2, user_id: user2.id, proposal_id: proposals2.id, token: "snx", count: 11000, vote_to_approve: false)
  vote7 = Vote.create(user: user3, user_id: user3.id, proposal_id: proposals2.id, token: "snx", count: 100000, vote_to_approve: true)
  vote8 = Vote.create(user: user4, user_id: user4.id, proposal_id: proposals2.id, token: "snx", count: 27000, vote_to_approve: false)
  vote9 = Vote.create(user: user5, user_id: user5.id, proposal_id: proposals2.id, token: "snx", count: 58000, vote_to_approve: false)
  vote10 = Vote.create(user: user6, user_id: user6.id, proposal_id: proposals2.id, token: "snx", count: 18000, vote_to_approve: false)

 # group = Group.create(name: 'Online Software Engineering 071921', location: 'online')

# group.members = [dakota, sam, marc, shivang]

# lecture_1 = group.events.create(
#   user: dakota,
#   title: 'Rails Fundamentals',
#   description: 'first lecture in phase 4',
#   location: "https://flatironschool.zoom.us/j/96333433409?pwd=dlNrLytiQ3lkTFBFZHQyWW9PZlFuUT09",
#   start_time: 1.hour.ago,
#   end_time: 1.hour.from_now
# )

# lecture_1.attendees = [dakota, sam]



# USE for POST:
# {"token": "lyra", 
#   "title": "Lyra 2", 
#   "description": "Establish the first Lyra DAO with a multi-sig of 5 council members.", 
#    "active": false,
#     "start_date": "10/06/2021 14:30",
#   "end_date": "11/06/2021 12:00",
#   "user": {"username": "Dakota", "email": "dakota@flatironschool.com"} }

