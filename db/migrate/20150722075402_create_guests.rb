class CreateGuests < ActiveRecord::Migration
  def change
    create_table :guests do |t|
      t.belongs_to  :invitation, index: true
      t.string      :first_name
      t.string      :last_name
      t.boolean     :attending
      t.boolean     :approved
      t.timestamps
    end
  end
end