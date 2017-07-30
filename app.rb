require 'bundler/setup'
Bundler.require

require_relative "list"

def debug_params
  puts "PARAMS: #{params}"
end

get "/" do
  # HINT: you can use instance variables in the view directly without passing to locals
  # such as this @title instance variable
  @title = "Your App Name"
  list = List.new("0")
  list.load_from_file
  files = Dir["./data/*.md"]
  p files
  files = files.map do |file| 
    list = List.new(file[7]) #the order of letter of id file
    list.load_from_file
    list
  end 
  erb :"index.html", locals: {files: files}, layout: :"layout.html"
end


# UPDATE a list with id from params["id"]
post "/lists/update" do
  debug_params

  list = List.new(params["id"])
  list.name = params["name"]
  # no need to load from file. we will save new contents to file

  items = params["items"].map do |item_hash|
    puts "creating Item from item_hash: #{item_hash}"
    Item.new(item_hash["name"], item_hash["status"])
  end
  list.items = items

  if params["toggle"]
    puts "Toggle: #{params["toggle"]}"
    list.toggle_item(params["toggle"])
  end

  if params["delete-item"]
    puts "Quy test to delete #{params["delete-item"]}"
    list.delete!(params["delete-item"].to_i)
  end

  if params["new-list-name"]
    list.name = params["new-list-name"]
  end

  if params["save-edit-item"] 
    index = params["edit-item-index"].to_i
    list.items[index].edit(params["edit-item"])
    # items[index].name = params["edit-item"]
  end

  list.save!
  redirect back
end

post "/lists/:id/items/add" do
  debug_params

  list = List.new(params["id"])
  list.load_from_file
  puts "Creating item #{params['name']} for list #{params['id']}"
  if params["add-item-button"]
    # params["name"] || 
    list.add(params["name"])
    list.save!
  end
  redirect back
end

post "/add-list" do 
  debug_params
  puts "Quy add-list now: "
  a = File.open("./data/#{params["new_file_number"]}.md", "w") {|f| f.write("#{params["item_name"]}") }
  redirect back 
end