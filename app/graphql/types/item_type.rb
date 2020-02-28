require 'graphql'

module Types
  class ItemType < GraphQL::Schema::Object
    description 'Resembles a Item object type'

    field :id, ID, null: false
    field :description, String, null: false
  end
end