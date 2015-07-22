class CreateInvitationsAndGuests < ActiveRecord::Migration
  def change
    create_table :invitations do |t|
      t.string    :email
      t.string    :title
      t.datetime  :sent_at
      t.datetime  :opened_at
      t.datetime  :replied_at
      t.text      :notes
      t.timestamps
    end

    create_table :guests do |t|
      t.string    :first_name
      t.string    :last_name
      t.boolean   :attending
      t.boolean   :approved
      t.timestamps
    end
  end
end
