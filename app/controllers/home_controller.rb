class HomeController < ApplicationController
  def index
  end
  def cache_static_image_files
    expires_in 1.year, public: true
  end
end
