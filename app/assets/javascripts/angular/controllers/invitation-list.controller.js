angular.module('app.controllers').controller('invitationListCtrl',
  ['Invitation', '$resource',
  function(Invitation, $resource) {

    var vm = this;

    Invitation.query(function(data) {
      vm.invitations = data.invitations;
    })
    vm.newInvitation = {};

    vm.addInvitation = function(newInvitation){
      Invitation.create({invitation: newInvitation}, function(response) {
        vm.invitations.push(response.invitation);
      });
      vm.newInvitation = {};
    };
}]);
