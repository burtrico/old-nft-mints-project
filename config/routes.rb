Rails.application.routes.draw do
  namespace :api do 
    resources :proposals, only: [:index, :show, :create, :update, :destroy]
    # resources :groups, only: [:index, :show, :create]
    # resources :user_groups, only: [:index, :create, :destroy]
    resources :votes, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:show, :create]
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    get "/me", to: "users#show"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    get "/api/me", to: "users#show"
    post "/api/signup", to: "users#create"
    post "/api/login", to: "sessions#create"
    delete "/api/logout", to: "sessions#destroy"

    get "/proposals", to: "proposals#show"
    get "/api/proposals", to: "proposals#show"

  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


