Rails.application.routes.draw do
  root 'application#index'
  # this causes the templates to try and reload the page

  scope '/api', defaults: { format: :json } do
    resources :events
    resources :invitations do
      resources :guests
    end
    resources :guests
  end

  get "*path" => "application#index"

end
