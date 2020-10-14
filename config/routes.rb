Rails.application.routes.draw do
  resources :contact, only: %i[index new create]
  root 'pages#home'
  get 'download_pdf', to: 'pages#download_pdf'
end
