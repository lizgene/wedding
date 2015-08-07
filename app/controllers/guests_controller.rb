class GuestsController < ApplicationController

  # GET /api/guests
  def index
    @guests = params[:invitation_id] ? Guest.where(invitation_id: params[:invitation_id]) : Guest.all
  end

  # GET /api/guests/:id
  def show
    @guest = Guest.find_by_id(params[:id])
  end

  # POST /api/guests
  def create
    @guest = Guest.create(guest_params)
    render :show
  end


  # PUT /api/guests/:id
  def update
    @guest = Guest.find_by_id(params[:id])

    if ! @guest.update_attributes(guest_params)
      return error_saving(@guest.errors.full_messages.to_sentence)
    end

    render :show
  end

  # DELETE /api/guests/:id
  def destroy
    @guest = Guest.find_by_id(params[:id])
    @guest.destroy

    render :show
  end

  private

  def guest_params
    params.require(:guest).permit(:id, :first_name, :last_name, :attending, :approved, :invitation_id)
  end

end
