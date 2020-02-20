require 'sinatra'
require "sinatra/reloader"

set :views, Proc.new { File.join(root, "src") }
set :public_folder, Proc.new { File.join(root, "dist") }

get '/' do
  erb :index
end