class User < ApplicationRecord
  has_many :user_composer_members, dependent: :destroy
  has_many :composers, through: :user_composer_members
  has_many :user_circle_members, dependent: :destroy
  has_many :circles, through: :user_circle_members
  has_many :circles_owned, class_name: 'Circle', foreign_key: 'owner_id', dependent: :destroy
  has_many :playlists, as: :playlist_owner, dependent: :destroy

  validates :login_id, presence: true, uniqueness: true
  validates :is_system_admin, inclusion: { in: [true, false] }
  validates :name, presence: true

  attribute :is_system_admin, :boolean, default: false
end
