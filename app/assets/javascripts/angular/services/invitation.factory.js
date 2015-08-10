angular.module('app.services').factory('Invitation', ['$resource', function ($resource) {

  return $resource("/api/invitations/:id", { id: "@id" },
    {
      'query':   { method: 'GET', isArray: false },
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: false },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' },
      'search':  { method: 'GET', url: '/api/invitations/search','params': { query: '@query' }, isArray: false }
    }
  );

  // var baseRoute = $resource('/invitations/:id', {id: '@id'})

  // return {
  //   'query':    $resource('/invitations/:id', {id: '@id'}),
  //   'create':   $resource('/invitations/:id', {id: '@id'}),
  //   'index':    $resource('/invitations/:id', {id: '@id'}),
  //   'show':     $resource('/invitations/:id', {id: '@id'}),
  //   'update':   $resource('/invitations/:id', {id: '@id'}),
  //   'destroy':  $resource('/invitations/:id', {id: '@id'}),
  //   'search':   $resource('/invitations/search/:query', {query: '@query'})
  // }

}]);
