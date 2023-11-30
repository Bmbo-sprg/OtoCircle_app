Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/users', to: 'users#index'
      post '/users', to: 'users#create'
      get '/users/:id', to: 'users#show'
      put '/users/:id', to: 'users#update'
      delete '/users/:id', to: 'users#destroy'
      get '/musics', to: 'musics#index'
      post '/musics', to: 'musics#create'
      get '/musics/:id', to: 'musics#show'
      delete '/musics/:id', to: 'musics#destroy'
    end
  end
  root 'homepage#index'

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Handle all other routes with frontend app
  get '/*path' => 'homepage#index'
end
