class RestrurantsController < ApplicationController
  def index
    @restrurant = Restrurant.all
  end

  def show
    @restrurant = Restrurant.find(params[:id])
  end
end
