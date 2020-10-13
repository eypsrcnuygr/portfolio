Rails.application.routes.draw do
  root 'pages#home'
  get 'download_pdf', to: "pages#download_pdf"
end
