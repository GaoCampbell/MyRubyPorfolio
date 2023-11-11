class HomeController < ApplicationController
  def index
  end
  
  def set_cookie
    cookies[:user_id] = {
      value: '1234',
      expires: 1.year.from_now,
      httponly: true
    }
    render plain: 'Cookie set!'
  end
end
