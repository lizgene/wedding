json.invitations do
  json.array! @invitations, partial: "invitations/invitation", as: :invitation
end