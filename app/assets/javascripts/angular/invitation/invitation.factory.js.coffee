(->
  InvitationService = ($http)->

  InvitationService
    .$inject = ['$http']

  return $http("/api/invitations/:id", {id: "@id"},
    {
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
  );

  angular
    .module('app')
    .factory('InvitationService', InvitationService)
)()

# angular.module('app').factory('InvitationService', ['$resource' ($resource) ->
    
#     return $resource("/api/invitations/:id", {id: "@id"},
#       {
#         'create':  { method: 'POST' },
#         'index':   { method: 'GET', isArray: true },
#         'show':    { method: 'GET', isArray: false },
#         'update':  { method: 'PUT' },
#         'destroy': { method: 'DELETE' }
#       }
# ])


# var sharkweekServices = angular.module('sharkweekServices', ['ngResource']);

# sharkweekServices.factory("Product", ["$resource", function($resource) {
#   return $resource("/api/products/:id", { id: "@id" },
#     {
#       'create':  { method: 'POST' },
#       'index':   { method: 'GET', isArray: true },
#       'show':    { method: 'GET', isArray: false },
#       'update':  { method: 'PUT' },
#       'destroy': { method: 'DELETE' }
#     }
#   );
# }])



# app.factory("Contact", function($resource) {
#   return $resource("/api/contacts/:id", { id: "@id" },
#     {
#       'create':  { method: 'POST' },
#       'index':   { method: 'GET', isArray: true },
#       'show':    { method: 'GET', isArray: false },
#       'update':  { method: 'PUT' },
#       'destroy': { method: 'DELETE' }
#     }
#   );
# });