class Music < ApplicationRecord
  belongs_to :composer
  has_many :music_playlist_relations, dependent: :destroy
  has_many :playlists, through: :music_playlist_relations

  validates :name, presence: true
  validates :composer_id, presence: true
  validates :visible_to, inclusion: { in: ["private", "circle", "global"] }
end
