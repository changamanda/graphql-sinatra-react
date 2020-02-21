require 'bundler'

Bundler.require

configure :development do
  set :database, {
    adapter: 'postgresql',
    encoding: 'unicode',
    database: 'todo_list'
  }
end

set :views, Proc.new { File.join(root, "src") }
set :public_folder, Proc.new { File.join(root, "dist") }

get '/' do
  erb :index
end