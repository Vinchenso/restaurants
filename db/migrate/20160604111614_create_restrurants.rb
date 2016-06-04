class CreateRestrurants < ActiveRecord::Migration
  def change
    create_table :restrurants do |t|
      t.string     :name
      t.string     :address
      t.text       :description
      t.timestamps
    end
  end
end
