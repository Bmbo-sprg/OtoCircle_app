class Playlist < ApplicationRecord
  belongs_to :creator, polymorphic: true
  has_many :music_playlist_relations, dependent: :destroy
  has_many :musics, through: :music_playlist_relations

  validates :name, presence: true
  validates :visible_to, inclusion: { in: ["private", "circle", "global"] }
end
