angular.module('app.controllers').controller('guestListCtrl',
  ['Guest', 'Invitation', '$stateParams',
  function(Guest, Invitation, $stateParams) {

    var vm = this;

    vm.guests = Invitation.guests($stateParams.id);

    vm.newGuest = { "invitation_id": $stateParams.id };

    vm.addGuest = function(newGuest){
      Guest.create(newGuest).then(function(response) {
        vm.guests.push(response.guest);
      });
      vm.newGuest = {};
    };

    vm.removeGuest = function(guest){
      Guest.delete(guest.id).then(function(){
        vm.guests.splice(vm.guests.indexOf(guest), 1);
      });
    };
}]);
