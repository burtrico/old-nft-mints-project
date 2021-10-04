class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio, :wallet_address
end
