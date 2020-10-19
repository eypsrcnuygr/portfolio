Rails.application.routes.draw do
  post 'contact', to: 'pages#create_form'
  root 'pages#home'
end
