class WelcomeController < ApplicationController
  skip_before_action :authenticate_user!
  layout 'welcome'

  def index
    @props = {}
  end
end
