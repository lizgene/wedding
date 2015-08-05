class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # http://stackoverflow.com/questions/14734243/rails-csrf-protection-angular-js-protect-from-forgery-makes-me-to-log-out-on
  after_filter :set_csrf_cookie_for_ng

  def error_saving(message = nil)
    error(400, message || "There was an error saving your changes.", "There Was An Error")
  end

  def error(code, message, title)
    @code = code
    @error_title = title
    @error_message = message
    render text: "{}", status: code, layout: true
  end

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  def index
  end

  protected

  # In Rails 4.1 and below
  def verified_request?
    super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
  end
end
