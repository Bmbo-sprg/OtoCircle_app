# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Add admin user
User.find_or_create_by!(
  login_id: 'admin',
  is_system_admin: true,
  name: 'admin',
  bio: 'admin',
)

Circle.find_or_create_by!(
  name: 'admin_circle',
  owner_id: User.find_by(login_id: 'admin').id,
)

Composer.find_or_create_by!(
  name: 'admin_composer',
)

UserCircleMember.find_or_create_by!(
  user_id: User.find_by(login_id: 'admin').id,
  circle_id: Circle.find_by(name: 'admin_circle').id,
)

UserComposerMember.find_or_create_by!(
  user_id: User.find_by(login_id: 'admin').id,
  composer_id: Composer.find_by(name: 'admin_composer').id,
)
