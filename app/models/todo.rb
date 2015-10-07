class Todo < ActiveRecord::Base
  validates :title, :body, presence: true
  has_many :steps
end
