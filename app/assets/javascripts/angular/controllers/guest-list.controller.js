angular.module('app.controllers').controller('guestListCtrl',
  ['Guest', 'Invitation', '$stateParams',
  function(Guest, Invitation, $stateParams) {

    var vm = this;

    Guest.query({invitation_id: $stateParams.id}, function(data) {
      vm.guests = data.guests;
    });

    vm.newGuest = { "invitation_id": $stateParams.id };

    vm.addGuest = function(newGuest){
      Guest.create({guest: newGuest}, function(response) {
        vm.guests.push(response.guest);
      });
      vm.newGuest = { "invitation_id": $stateParams.id };
    };

    vm.removeGuest = function(guest){
      Guest.delete({id: guest.id}, function(){
        vm.guests.splice(vm.guests.indexOf(guest), 1);
      });
    };

    vm.updateGuest = function(guest){
      Guest.update({id: guest.id, guest: guest});
    };

}]);
