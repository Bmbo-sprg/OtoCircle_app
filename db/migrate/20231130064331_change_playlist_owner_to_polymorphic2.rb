class ChangePlaylistOwnerToPolymorphic2 < ActiveRecord::Migration[7.1]
  class ChangePlaylistOwnerToPolymorphic < ActiveRecord::Migration[7.1]
    def up
      add_column :playlists, :owner_type, :string
      add_column :playlists, :owner_id, :integer
      drop_table :user_playlist_relations
      drop_table :circle_playlist_relations
    end

    def down
      remove_column :playlists, :owner_type
      remove_column :playlists, :owner_id
      create_table :user_playlist_relations do |t|
        t.integer :playlist_id
        t.integer :user_id

        t.timestamps
      end
      create_table :circle_playlist_relations do |t|
        t.integer :playlist_id
        t.integer :circle_id

        t.timestamps
      end
    end
  end
end
