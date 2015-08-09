angular.module('app.controllers').controller('rsvpCtrl',
  ['Invitation', 'Guest', '$stateParams',
  function(Invitation, Guest, $stateParams) {

    var vm = this;

    // we will store all of our form data in this object
    if($stateParams.id) {
      Invitation.show({id: $stateParams.id}, function(data){
        vm.invitation = data.invitation
      });
    } else {
      vm.invitation = {};
    }

    // function to process the rsvp
    vm.processRsvp = function() {
        alert('awesome!');
    };

    vm.validateEmail = function() {
      alert("email validated");
    }

}]);
