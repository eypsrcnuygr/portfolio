class PagesController < ApplicationController
  def home
  end

  def download_pdf
    send_file "#{Rails.root}/public/assets/docs/CV.pdf", type: 'application/pdf', x_sendfile: true
  end
end
