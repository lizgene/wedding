angular.module('app.directives').directive('newGuest', ['Guest', function(Guest){
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      guests: '=guests',
      invitation: '=invitation',
      approved: '@'
    },
    templateUrl: 'directives/new-guest.html',
    bindToController: true,
    controllerAs: 'newGuestCtrl',
    controller: function() {
      var vm = this
      vm.newGuest = { "attending": true, "approved": vm.approved };

      vm.addGuest = function(newGuest){
        //need to populate invitation_id after the page has finished any get requests
        newGuest.invitation_id = vm.invitation.id

        Guest.create({guest: newGuest}, function(response) {
          vm.guests.push(response.guest);
        });
        vm.guest = {};
      };

    }
  }
}]);
