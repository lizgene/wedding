angular.module('app.controllers').controller('invitationsCtrl',
  ['Invitation', 'Guest', '$stateParams',
  function(Invitation, Guest, $stateParams) {

    var vm = this;

    vm.invitation = Invitation.show($stateParams.id).then(function(response) {
      vm.invitation = response.invitation
    });

    vm.destroyInvitation = function(invitationId){
      Invitation.delete(invitationId);
    };

    vm.updateInvitation = function(invitation){
      Invitation.update(invitation);
    };
}]);
