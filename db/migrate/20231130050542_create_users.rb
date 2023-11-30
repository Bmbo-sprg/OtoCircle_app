class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :login_id
      t.boolean :is_system_admin
      t.string :name
      t.text :bio

      t.timestamps
    end
  end
end
