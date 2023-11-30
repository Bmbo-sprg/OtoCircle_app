class CreateMusics < ActiveRecord::Migration[7.1]
  def change
    create_table :musics do |t|
      t.string :name
      t.integer :composer_id
      t.decimal :length
      t.decimal :bpm
      t.text :lyrics
      t.text :description
      t.string :visible_to

      t.timestamps
    end
  end
end
