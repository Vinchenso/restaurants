class RestrurantsController < ApplicationController
  def index
    @restrurant = Restrurant.all
  end

end
