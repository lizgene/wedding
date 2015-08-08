angular.module('app.services').factory('Guest', ['$resource', function ($resource) {

  return $resource("/api/guests/:id", { id: "@id" },
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
