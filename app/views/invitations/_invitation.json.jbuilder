json.(invitation, :id, :event_id, :email, :title, :sent_at, :opened_at, :replied_at, :notes, :created_at, :updated_at)
json.guests do
  json.array! invitation.guests, partial: "guests/guest", as: :guest
end
json.total_guests invitation.guests.count
