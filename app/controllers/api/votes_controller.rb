class Api::VotesController < ApplicationController
      def index
        render json: current_user.votes, status: :ok
      end

      def show
        vote = Vote.find_by(id: params[:id])
        render json: vote
      end
    
      def create
        vote = current_user.votes.new(vote_params)
        if vote.save
          render json: vote, status: :created
        else
          render json: vote.errors, status: :unprocessable_entity
        end
      end
    
      def update
        vote = Vote.find_by(id: params[:id])
        if vote.update(vote_params)
          render json: vote, status: :ok
        else
          render json: vote.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        vote = current_user.votes.find_by(id: params[:id])
        vote.destroy
        render json: vote, status: :ok
      end
    
      private
    
      def vote_params
        params.permit(:proposal_id, :user_id, :token, :count, :vote_to_approve)
      end

end
