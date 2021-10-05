class CreateProposals < ActiveRecord::Migration[6.1]
  def change
    create_table :proposals do |t|
      t.string :token
      t.string :title
      t.text :description
      t.boolean :active
      t.datetime :start_date
      t.datetime :end_date
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
