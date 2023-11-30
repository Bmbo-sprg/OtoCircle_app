class UserComposerMember < ApplicationRecord
  belongs_to :user
  belongs_to :composer

  validates :user_id, presence: true
  validates :composer_id, presence: true
end
