Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/circles', to: 'circles#index'
      post '/circles', to: 'circles#create'
      get '/circles/:id', to: 'circles#show'
      put '/circles/:id', to: 'circles#update'
      delete '/circles/:id', to: 'circles#destroy'

      get '/composers', to: 'composers#index'
      post '/composers', to: 'composers#create'
      get '/composers/:id', to: 'composers#show'
      delete '/composers/:id', to: 'composers#destroy'

      get '/musics', to: 'musics#index'
      post '/musics', to: 'musics#create'
      get '/musics/:id', to: 'musics#show'
      delete '/musics/:id', to: 'musics#destroy'

      get '/users', to: 'users#index'
      post '/users', to: 'users#create'
      get '/users/:id', to: 'users#show'
      put '/users/:id', to: 'users#update'
      delete '/users/:id', to: 'users#destroy'
    end
  end
  root 'homepage#index'

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Handle all other routes with frontend app
  get '/*path' => 'homepage#index'
end
