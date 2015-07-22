class Invitation < ActiveRecord::Base
  belongs_to :event
  has_many :guests
end