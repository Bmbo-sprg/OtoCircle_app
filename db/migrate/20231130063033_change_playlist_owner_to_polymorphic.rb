class ChangePlaylistOwnerToPolymorphic < ActiveRecord::Migration[7.1]
  def up
    add_column :playlists, :owner_type, :string
    add_column :playlists, :owner_id, :integer
  end

  def down
    drop_table :user_playlist_relations
    drop_table :circle_playlist_relations
  end
end
