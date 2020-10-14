Rails.application.routes.draw do
  get 'contacts/index'
  root 'pages#home'
  get 'download_pdf', to: "pages#download_pdf"
end
