require 'date'
# Invitations

Event.delete_all
Event.create(
  :id => 1,
  :title => 'Arnold Wedding',
  :date => Date.today,
  :description => 'Liz and Nathan tie the knot')

invitations = YAML::load(File.read(Rails.root.join('db', 'invitations.yml')))
Invitation.delete_all
invitations["invitations"].each do |invitation|
  Invitation.create(
    :event_id => Event.last.id, #this should be the wedding
    :email => invitation["email"],
    :title => invitation["title"],
    :sent_at => Date.today,
    :opened_at => Date.today,
    :replied_at => Date.today,
    :notes => invitation['notes']) 
end

# Guests
guests = YAML::load(File.read(Rails.root.join('db', 'guests.yml')))
Guest.delete_all
guests["guests"].each do |guest|
  Guest.create(
    :invitation_id => Invitation.find_by_email(guest["invitation_email"]).id,
    :first_name => guest["first_name"],
    :last_name => guest["last_name"],
    :attending => guest["attending"],
    :approved => guest["approved"])
end