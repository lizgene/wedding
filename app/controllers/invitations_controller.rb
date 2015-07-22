class InvitationsController < ApplicationController

  # GET /api/invitations
  def index
    @invitations = Invitation.all
  end

  # GET /api/invitations/:id
  def show
    @invitation = Invitation.find_by_id(params[:id])
  end

end