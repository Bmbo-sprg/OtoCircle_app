class CreateUserCircleMembers < ActiveRecord::Migration[7.1]
  def change
    create_table :user_circle_members do |t|
      t.integer :user_id
      t.integer :circle_id

      t.timestamps
    end
  end
end
