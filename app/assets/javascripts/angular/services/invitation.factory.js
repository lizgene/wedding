// angular.module('app.services').factory("Invitation", ["Restangular", function(Restangular) {
//   return Restangular("/api/invitations/:id", { id: "@id" },
//     {
//       'create':  { method: 'POST' },
//       'index':   { method: 'GET', isArray: false },
//       'show':    { method: 'GET', isArray: false },
//       'update':  { method: 'PUT' },
//       'destroy': { method: 'DELETE' }
//     }
//   );
// }])

angular.module('app.services').factory('Invitation', ['Restangular', function (Restangular) {
  return {
    index: function() { 
      console.log("in index")
      // create the Restangular object
      return Restangular.all('invitations').getList().$object;
    },
    show: function(invitationId) {
      return Restangular.one('invitations', invitationId).get()
    }
  };
}]);