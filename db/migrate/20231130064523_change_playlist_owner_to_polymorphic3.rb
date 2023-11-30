class ChangePlaylistOwnerToPolymorphic3 < ActiveRecord::Migration[7.1]
  def up
    drop_table :user_playlist_relations
    drop_table :circle_playlist_relations
  end

  def down
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
