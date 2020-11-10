class ApplicationController < Sinatra::Base

  configure do
    set :views, "app/views"
    set :public_dir, "public"
  end

  get '/' do
    @hello = "Hello World from the homepage!"
    erb :'homepage/index'
  end
  
end