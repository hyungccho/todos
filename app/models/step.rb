class Step < ActiveRecord::Base
  validates :body, :todo_id, presence: true
  belongs_to :todo
end
