class Invitation < ActiveRecord::Base
  belongs_to :event
  has_many :guests
  accepts_nested_attributes_for :guests
end
