class CreateCirclePlaylistRelations < ActiveRecord::Migration[7.1]
  def change
    create_table :circle_playlist_relations do |t|
      t.integer :playlist_id
      t.integer :circle_id

      t.timestamps
    end
  end
end
