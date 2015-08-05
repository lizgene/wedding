angular.module('app.controllers').controller('invitationsCtrl',
  ['Invitation', 'Guest', '$stateParams',
  function(Invitation, Guest, $stateParams) {

    var vm = this;

    vm.invitation = Invitation.show($stateParams.id).then(function(response) {
      vm.invitation = response.invitation
      vm.newGuest = { "invitation_id": response.invitation.id };
    });

    vm.addGuest = function(newGuest){
      Guest.create(newGuest).then(function(response) {
        vm.invitation.guests.push(response.guest);
      });
      vm.newGuest = {};
    };

    vm.deleteGuest = function(guest){
      var index = vm.invitation.guests.indexOf(guest);

      Guest.delete(guest.id).then(function(response) {
        vm.invitation.guests.splice(index, 1);
      });
    };

    vm.updateGuest = function(guest){
      Guest.update(guest).then(function(response) {
        vm.invitation.guests.push(response.guest);
      });
      vm.newGuest = {};
    };

    vm.destroyInvitation = function(invitationId){
      Invitation.delete(invitationId);
    };

    vm.updateInvitation = function(invitation){
      Invitation.update(invitation);
    };
}]);
