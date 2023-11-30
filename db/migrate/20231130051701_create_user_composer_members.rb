class CreateUserComposerMembers < ActiveRecord::Migration[7.1]
  def change
    create_table :user_composer_members do |t|
      t.integer :user_id
      t.integer :composer_id

      t.timestamps
    end
  end
end
