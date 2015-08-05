angular.module('app.controllers').controller('invitationListCtrl',
  ['Invitation',
  function(Invitation) {

    var vm = this;

    vm.invitations = Invitation.index();
    vm.newInvitation = {};

    vm.addInvitation = function(newInvitation){
      Invitation.create(newInvitation).then(function(response) {
        vm.invitations.push(response.invitation);
      });
      vm.newInvitation = {};
    };
}]);
