class InvitationsController < ApplicationController

  # GET /api/invitations
  def index
    @invitations = Invitation.all
  end

  # GET /api/invitations/:id
  def show
    @invitation = Invitation.find_by_id(params[:id])
  end

  # POST /api/invitations
  def create
    @invitation = Invitation.create(invitation_params)
    render :show
  end

  # PUT /api/invitations/:id
  def update
    @invitation = Invitation.find_by_id(params[:id])

    if ! @invitation.update_attributes(invitation_params)
      return error_saving(@invitation.errors.full_messages.to_sentence)
    end

    render :show
  end

  # DELETE /api/invitations/:id
  def destroy
    @invitation = Invitation.find_by_id(params[:id])
    @invitation.destroy

    render :show
  end

  # GET /api/invitations/:query
  def search
    @invitation = Invitation.find_by_email(params[:query])

    if @invitation
      render :show
    else
      render json: { success: false }
    end
  end

  private

  def invitation_params
    params.require(:invitation).permit(:id, :title, :email, :event_id, :sent_at, :opened_at, :replied_at, :notes)
  end

end
