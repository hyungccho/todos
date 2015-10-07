# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


todos = Todo.create([
  {title: "water plants", body: "waterem"},
  {title: "grocery shopping", body: "eggs"},
  {title: "work out", body: "do you even lift"},
  {title: "do laundry", body: "yay"},
  {title: "clean computer screen", body: "cant seee anything"}])

steps = Step.create([
  {body: "get watering can", todo_id: 1},
  {body: "fill watering can", todo_id: 1},
  {body: "pour water", todo_id: 1},
  {body: "get swoll", todo_id: 3},
  {body: "lift weights", todo_id: 3},
  {body: "shower", todo_id: 3}
  ])
