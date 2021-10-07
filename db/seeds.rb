# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "Burt", email: "burtrico@gmail.com")
user2 = User.create(username: "Dakota", email: "dakota@flatironschool.com")
user3 = User.create(username: "Sam", email: "sam.boahen@flatironschool.com")
user4 = User.create(username: "Marc", email: "marc.majcher@flatironschool.com")
user5 = User.create(username: "Shivang", email: "shivang.dave@flatironschool.com")

proposals1 = Proposals.create(token: "lyra", title: "Establish the Lyra DAO", 
description: "Establish the first Lyra DAO with a multi-sig of 5 council members.", 
 active: true,
#  Time.now.strftime("%m/%d/%Y %H:%M")
  start_date: "10/06/2021 14:30",
end_date: "11/06/2021 12:00",
username: "Burt" )

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



