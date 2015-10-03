class Guest < ActiveRecord::Base
  belongs_to :invitation

  def full_name
    "#{first_name} #{last_name}"
  end
end
