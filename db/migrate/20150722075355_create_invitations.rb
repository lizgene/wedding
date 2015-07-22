class CreateInvitations < ActiveRecord::Migration
  def change
    create_table :invitations do |t|
      t.belongs_to  :event, index: true
      t.string      :email
      t.string      :title
      t.datetime    :sent_at
      t.datetime    :opened_at
      t.datetime    :replied_at
      t.text        :notes
      t.timestamps
    end
  end
end
    