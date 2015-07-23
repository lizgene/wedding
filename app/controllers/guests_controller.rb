class GuestsController < ApplicationController

  # GET /api/guests
  def index
    @guests = Guest.all
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

  private

  def guest_params
    params.require(:guest).permit(:first_name, :last_name, :attending, :approved, :invitation_id)
  end

end