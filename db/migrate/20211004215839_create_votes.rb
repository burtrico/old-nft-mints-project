class CreateVotes < ActiveRecord::Migration[6.1]
  def change
    create_table :votes do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :proposal, null: false, foreign_key: true
      t.string :token
      t.integer :count
      t.boolean :vote_to_approve

      t.timestamps
    end
  end
end
