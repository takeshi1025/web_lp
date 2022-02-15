Rails.application.routes.draw do
  root to: 'toppages#index'
  resources :toppages, only: [:index, :new, :create]
  post 'toppages/confirm', to: 'toppages#confirm', as: 'confirm'
  post 'toppages/back', to: 'toppages#back', as: 'back'
  get 'done', to: 'toppages#done', as: 'done'
end
