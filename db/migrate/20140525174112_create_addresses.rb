class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :kind
      t.string :street

      t.timestamps
    end
  end
end
