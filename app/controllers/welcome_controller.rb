class WelcomeController < ApplicationController
  layout 'welcome'

  def index
    @props = {}
  end
end
