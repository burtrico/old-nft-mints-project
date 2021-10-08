class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :wallet_address
  # :bio
end
