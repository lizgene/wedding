angular.module('app.directives').directive('newGuest', ['Guest', '$stateParams', function(Guest, $stateParams){
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      guests: '=guests'
    },
    templateUrl: 'directives/new-guest.html',
    bindToController: true,
    controllerAs: 'newGuestCtrl',
    controller: function() {
      var vm = this

      vm.newGuest = { "invitation_id": $stateParams.id };

      vm.addGuest = function(newGuest){
        Guest.create({guest: newGuest}, function(response) {
          vm.guests.push(response.guest);
        });
        vm.guest = {};
      };

    }
  }
}]);
