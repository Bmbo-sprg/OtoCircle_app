class ChangePlaylistOwnerToPolymorphic < ActiveRecord::Migration[7.1]
  def up
    add_column :playlists, :owner_type, :string
    add_column :playlists, :owner_id, :integer
  end

  def down
    remove_column :playlists, :owner_type
    remove_column :playlists, :owner_id
  end
end
