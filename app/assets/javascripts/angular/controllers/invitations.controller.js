angular.module('app.controllers').controller('invitationsCtrl',
  ['Invitation', 'Guest', '$stateParams',
  function(Invitation, Guest, $stateParams) {

    var vm = this;

    Invitation.show({id: $stateParams.id}, function(data){
      vm.invitation = data.invitation
    });

    vm.destroyInvitation = function(invitationId){
      Invitation.delete(invitationId);
    };

    vm.updateInvitation = function(invitation){
      Invitation.update(invitation);
    };
}]);
