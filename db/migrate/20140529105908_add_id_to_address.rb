class AddIdToAddress < ActiveRecord::Migration
  def change
    add_column :addresses, :person_id, :integer
  end
end
