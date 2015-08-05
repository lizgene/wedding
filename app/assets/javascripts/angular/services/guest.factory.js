angular.module('app.services').factory('Guest', ['Restangular', function (Restangular) {
  return {
    index: function() {
      // create the Restangular object
      return Restangular.all('guests').getList().$object;
    },
    show: function(guestId) {
      return Restangular.one('guests', invitationId).get()
    },
    create: function(guest) {
      return Restangular.all('guests').post(guest)
    },
    update: function(guest) {
      return Restangular.one('guests', guest.id).put(guest)
    },
    delete: function(guestId) {
      return Restangular.one('guests', guestId).remove()
    }
  };
}]);
