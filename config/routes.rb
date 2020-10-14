Rails.application.routes.draw do
  post 'contact', to: 'pages#create_form'
  root 'pages#home'
  get 'download_pdf', to: 'pages#download_pdf'
end
