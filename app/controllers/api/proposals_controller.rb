class Api::ProposalsController < ApplicationController
      def index
        proposals = Proposal.all.includes(:votes)
        render json: proposals #, each_serializer: ProposalIndexSerializer
      end
    
      def show
        proposal = Proposal.find_by(id: params[:id])
        render json: proposal
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
        proposal = Proposal.find_by(id: params[:id])
        # proposal = current_user.proposals.find_by(id: params[:id])
        if proposal.update(proposal_params)
          render json: proposal, status: :ok
        else
          render json: proposal.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        proposal = Proposal.find_by(id: params[:id])
        # proposal = current_user.created_proposals.find(params[:id])
        proposal.destroy
        # we'll render the proposal as json in case we want to enable undo functionality from the frontend.
        render json: proposal, status: :ok
      end
    
      private
    
      def proposal_params
        params.permit(:token, :title, :description, :active, :start_date, :end_date, :username)
      end

      
end
