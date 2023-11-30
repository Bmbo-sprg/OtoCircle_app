class AddMusicPlaylistRelations < ActiveRecord::Migration[7.1]
  def change
    create_table :music_playlist_relations do |t|
      t.integer :music_id
      t.integer :playlist_id

      t.timestamps
    end
  end
end
