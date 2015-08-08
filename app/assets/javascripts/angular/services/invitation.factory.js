angular.module('app.services').factory('Invitation', ['$resource', function ($resource) {

  return $resource("/api/invitations/:id", { id: "@id" },
    {
      'query':   { method: 'GET', isArray: false },
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: false },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
  );

}]);
