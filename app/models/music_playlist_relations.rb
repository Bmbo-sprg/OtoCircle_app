class MusicPlaylistRelation < ApplicationRecord
  belongs_to :music
  belongs_to :playlist

  validates :music_id, presence: true
  validates :playlist_id, presence: true
end