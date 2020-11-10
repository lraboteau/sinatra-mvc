class PostsController < Sinatra::Base

  configure do
    set :views, "app/views"
    set :public_dir, "public"
  end

  get '/posts' do
    @hello = Post.hello_world
    erb :'posts/index'
  end
   
end