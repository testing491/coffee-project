class CoffeeSerializer < ActiveModel::Serializer
  attributes :id, :blend_name, :origin, :variety, :notes, :intensifier
end
