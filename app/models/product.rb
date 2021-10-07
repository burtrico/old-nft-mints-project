class Product < ActiveRecord::Base
    has_many :reviews
    has_many :users, through: :reviews

    
    def leave_review(user, star_rating, comment)
        puts "Leave Review Method:"
        puts "User: #{user.name}"
        puts "Star_rating: #{star_rating}"
        puts "Comment: #{comment}"

        Review.create(user_id: user.id, product_id: self.id, star_rating: star_rating, comment: comment)
    end

    def print_all_reviews
        puts "Print All Reviews Method:"
        self.reviews.each do |r|
            r.print_review
        end
    end

    def average_rating
        puts "Average Rating Method:"
            self.reviews.map{ |rev| rev.star_rating}.sum/self.reviews.length.to_f


    end





end