require 'bundler'
require 'sinatra/activerecord'
require_relative 'app/models/item'
require_relative 'app/graphql/schema'
require 'rack/contrib'
require 'pry'

Bundler.require
use Rack::PostBodyContentTypeParser

set :views, Proc.new { File.join(root, "src") }
set :public_folder, Proc.new { File.join(root, "dist") }

class App < Sinatra::Base
  get '/' do
    erb :index
  end

  get '/items' do
    items = Item.all
    json items
  end

  post '/graphql' do
    result = AppSchema.execute(
      params[:query],
      variables: params[:variables],
      context: { current_user: nil },
    )
    json result
  end
end