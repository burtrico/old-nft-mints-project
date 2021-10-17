class Api::ProposalsController < ApplicationController
  # before_action :set_proposal, only: [:show, :update, :destroy]
  # before_action :authorize_user, only: [:update, :destroy]

      def index
        proposals = Proposal.all.includes(:votes)
        render json: proposals, each_serializer: ProposalIndexSerializer
      end
    
      def show
        proposal = Proposal.find_by(id: params[:id])
        render json: proposal, status: :created
        # render json: @proposal
      end
    
      def create
        proposal = Proposal.new(proposal_params)
        # proposal = current_user.created_proposals.new(proposal_params)
        if proposal.save
          render json: proposal, status: :created
        else
          render json: proposal.errors, status: :unprocessable_entity
        end
      end
    
    
     def update
      proposal = User.find_by(id: params[:id])
        if Proposal.update(proposal_params)
          render json: proposal, status: :ok
        else
          render json: proposal.errors, status: :unprocessable_entity
        end
      end
      
      # def update

        # if @proposal.update(proposal_params)
          # render json: @proposal, status: :ok
        # else
          # render json: @proposal.errors, status: :unprocessable_entity
        # end
      # end

      def destroy
        proposal = Proposal.find_by(id: params[:id])
        proposal.destroy
        # @proposal.destroy
        # we'll render the proposal as json in case we want to enable undo functionality from the frontend.
        render json: proposal, status: :ok
      end
    
      private
    
      def proposal_params
        params.permit(:token, :title, :description, :active, :start_date, :end_date, :user)
      end

      # def set_proposal
      #   @proposal = Proposal.find_by(id: params[:id])
      # end
    
      # def authorize_user
      #   user_can_modify = current_user.admin? || @proposal.user_id == current_user.id
      #   return render json: { error: "You don't have permission to perform that action" }, status: :forbidden unless user_can_modify
      # end

      
end
