class CreatePlaylists < ActiveRecord::Migration[7.1]
  def change
    create_table :playlists do |t|
      t.string :name
      t.text :description
      t.string :visible_to

      t.timestamps
    end
  end
end
