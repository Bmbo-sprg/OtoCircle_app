class CreateCircles < ActiveRecord::Migration[7.1]
  def change
    create_table :circles do |t|
      t.string :name
      t.integer :owner_id

      t.timestamps
    end
  end
end
