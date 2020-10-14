class ApplicationController < ActionController::Base

  def index
    @contact = Contact.new(params)
  end

  def create_form
    @contact = Contact.new(params)
    @contact.request = request
    respond_to do |format|
      if @contact.deliver
        # re-initialize Contact object for cleared form
        @contact = Contact.new
        format.html { redirect_to root_path, notice: 'Your message has been sent' }
        format.json   { flash.now[:success] = @message = "Thank you for your message. I'll get back to you soon!" }
      else
        format.html { render 'home', alert: 'There was something wrong with your message' }
        format.json   { flash.now[:error] = @message = "Message did not send." }
      end
    end
  end
end
