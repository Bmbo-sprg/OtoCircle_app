class CreateUserPlaylistRelations < ActiveRecord::Migration[7.1]
  def change
    create_table :user_playlist_relations do |t|
      t.integer :playlist_id
      t.integer :user_id

      t.timestamps
    end
  end
end
