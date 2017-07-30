require_relative "item"

class List
  attr_reader :lines
  attr_accessor :paths, :files
  
  def initialize()
    # @lines = []
    # @items = []
    @paths = []
    @files = []
  end

  # def load_from_file
  #   @lines = File.read(filename).split("\n")
  #   @name = @lines.shift # get   the first line to be the List name
  #   @items = @lines.map.with_index {|line, index| Item.new_from_line(line, index)}
  # end

  def load_from_all_lists
    @paths = Dir["./data/*.md"]
    p files
    @files = @paths.map do |path| 
      list = List.new(path[7]) #the order of letter of id file
      list.load_from_file
      list
    end 
  end

  # def filename
  #   "data/#{id}.md"
  # end

  # def toggle_item(name)
  #   puts "Finding |#{name}|"
  #   item = items.find{|e| e.name == name}
  #   if item
  #     item.toggle!
  #   else
  #     puts "item not found: #{name}"
  #   end
  # end

  def add_list(id)
    self.files << List.new(id)
  end

  def save_all_list_files!
    @files = @files.map(&:save!)    
  end

  # def delete!(item_index)
  #   self.items.delete_at(item_index)
  #   self.items
  # end

end