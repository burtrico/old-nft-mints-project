# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_04_215839) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "proposals", force: :cascade do |t|
    t.string "token"
    t.string "title"
    t.text "description"
    t.boolean "active"
    t.datetime "start_date"
    t.datetime "end_date"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_proposals_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.text "bio"
    t.string "wallet_address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
  end

  create_table "votes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "proposal_id", null: false
    t.string "token"
    t.integer "count"
    t.boolean "vote_to_approve"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["proposal_id"], name: "index_votes_on_proposal_id"
    t.index ["user_id"], name: "index_votes_on_user_id"
  end

  add_foreign_key "proposals", "users"
  add_foreign_key "votes", "proposals"
  add_foreign_key "votes", "users"
end
