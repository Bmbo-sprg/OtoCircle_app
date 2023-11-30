class Circle < ApplicationRecord
  has_many :user_circle_members, dependent: :destroy
  has_many :users, through: :user_circle_members
  belongs_to :owner, class_name: 'User', foreign_key: 'owner_id'
  has_many :playlists, as: :creator, dependent: :destroy

  validates :name, presence: true
  validates :owner_id, presence: true
end
