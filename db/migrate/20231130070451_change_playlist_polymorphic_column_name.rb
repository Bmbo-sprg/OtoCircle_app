class ChangePlaylistPolymorphicColumnName < ActiveRecord::Migration[7.1]
  def change
    rename_column :playlists, :owner_type, :creator_type
    rename_column :playlists, :owner_id, :creator_id
  end
end
