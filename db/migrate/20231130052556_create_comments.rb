class CreateComments < ActiveRecord::Migration[7.1]
  def change
    create_table :comments do |t|
      t.integer :music_id
      t.integer :user_id
      t.decimal :position
      t.text :contents

      t.timestamps
    end
  end
end
