class Composer < ApplicationRecord
  has_many :user_composer_members, dependent: :destroy
  has_many :users, through: :user_composer_members
  has_many :musics, dependent: :destroy
  has_many :playlists, as: :creator, dependent: :destroy

  validates :name, presence: true
end
