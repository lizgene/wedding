require 'rails_helper'

RSpec.describe Guest, type: :model do

  it "has a valid factory" do
    expect(create(:guest)).to be_valid
  end

  it "returns a guest's full name as a string" do
    guest = FactoryGirl.create(:guest)
    expect(guest.full_name).to eq("#{guest.first_name} #{guest.last_name}")
  end

end
