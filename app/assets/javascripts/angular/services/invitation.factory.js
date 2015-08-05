angular.module('app.services').factory('Invitation', ['Restangular', function (Restangular) {
  return {
    index: function() {
      return Restangular.all('invitations').getList().$object;
    },
    show: function(invitationId) {
      return Restangular.one('invitations', invitationId).get().then(_.bind(function(response) {
        return response;
      }));
    },
    create: function(invitation) {
      return Restangular.all('invitations').post(invitation)
    },
    update: function(invitation) {
      return Restangular.one('invitations', invitation.id).put(invitation)
    },
    delete: function(invitationId) {
      return Restangular.one('invitations', invitationId).remove()
    }
  };
}]);
