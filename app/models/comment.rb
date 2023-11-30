class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :music

  validates :user_id, presence: true
  validates :music_id, presence: true
  validates :content, presence: true
end
