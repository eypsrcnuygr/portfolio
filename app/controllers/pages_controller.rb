class PagesController < ApplicationController
  def home
    @contact = Contact.new(params[:home])
    @contact.request = request
    respond_to do |format|
      if @contact.deliver
        # re-initialize Contact object for cleared form
        @contact = Contact.new
        format.html { redirect_to root_path, notice: 'Your message was succesfully send.' }
        format.js   { flash.now[:success] = @message = "Thank you for your message. I'll get back to you soon!" }
      else
        format.html { render 'home', notice: 'Your message was succesfully send.' }
        format.js   { flash.now[:error] = @message = "Message did not send." }
      end
    end
  end

  def download_pdf
    send_file "#{Rails.root}/public/assets/docs/CV.pdf", type: 'application/pdf', x_sendfile: true
  end

  def index
    @contact = Contact.new(params[:home])
  end
end
