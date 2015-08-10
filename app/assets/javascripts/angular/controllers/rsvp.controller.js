angular.module('app.controllers').controller('rsvpCtrl',
  ['Invitation', 'Guest', '$stateParams', '$q',
  function(Invitation, Guest, $stateParams, $q) {

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

    vm.validateEmail = function(email) {
      return $q(function(resolve, reject) {
        setTimeout(function() {
          if (email) {
            Invitation.search({query: email}).$promise.then(function(data) {
              if(data.invitation) {
                vm.invitation = data.invitation;
                console.log("invitation is  " + vm.invitation)
                resolve("Valid email, found invitation");
              } else {
                reject("Could not find invitation")
              }
            })

          } else {
            reject('Invalid email');
          }
        }, 1000);
      });
    }

}]);
