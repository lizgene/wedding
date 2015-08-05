angular.module('app.controllers').controller('GuestCtrl', 
  ['Guest', 
  function(Guest) {

    var vm = this;
    vm.guest = {};

    vm.addGuest = function(guest){
      Guest.create(guest);
      vm.guest = {};
    };

}]);