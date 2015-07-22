class GuestsController < ApplicationController

  # GET /api/guests
  def index
    @guests = Guest.all
  end

  # GET /api/guests/:id
  def show
    @guest = Guest.find_by_id(params[:id])
  end

end