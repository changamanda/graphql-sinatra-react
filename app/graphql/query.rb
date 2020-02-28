require 'graphql'
require_relative 'types/item_type'

class QueryType < GraphQL::Schema::Object
  description 'The query root of this schema'

  field :items, [Types::ItemType], null: false do
    description 'Get all items of the system'
  end

  def items
    Item.all
  end
end