ActionMailer::Base.smtp_settings = {
  domain: 'www.eyupsercanuygur.com',
  address: 'smtp.sendgrid.net',
  port: 587,
  authentication: :plain,
  user_name: 'apikey',
  password: ENV['API_KEY']
}
