angular.module('app.controllers').controller('rsvpCtrl',
  ['Invitation', 'Guest', '$stateParams', '$q', '$timeout',
  function(Invitation, Guest, $stateParams, $q, $timeout) {
    var vm = this;

    vm.teststep = 1;
    vm.changeTestStep = function() {
      vm.teststep += 1;
    }

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
        //eventually use this to send confirmation email to users.
    };

    vm.findInvitation = function(email) {
      vm.loading = true;
      vm.errorMessage = null; //clear any error messages
      return $q(function(resolve, reject) {
        $timeout(function() {
          if (email) {
            Invitation.search({query: email}).$promise.then(function(data) {
              if(data.invitation) {
                vm.invitation = data.invitation;
                vm.changeTestStep()
                resolve("Valid email, found invitation");
              } else {
                vm.errorMessage = "Oops! I can't find your invitation. Double-check your email address - it should be the one we sent your invitation to."
                reject(vm.errorMessage)
              }
            })
          }
          vm.loading = false;
        }, 1000);
      });
    }

}]);
