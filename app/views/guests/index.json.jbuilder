json.guests do
  json.array! @guests, partial: "guests/guest", as: :guest
end