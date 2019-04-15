Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :products
  resources :reviews

  post '/likes', to: 'products#increase_likes'
end
