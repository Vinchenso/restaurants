class Comment < ActiveRecord::Base
  belongs_to :restrurant
  validates :restrurant , presence: true
  has_ancestry
end
