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
        //eventually use this to send confirmation email to users.
    };

    vm.findInvitation = function(email) {
      vm.loading = true;
      return $q(function(resolve, reject) {
        setTimeout(function() {
          if (email) {
            Invitation.search({query: email}).$promise.then(function(data) {
              if(data.invitation) {
                vm.invitation = data.invitation;
                resolve("Valid email, found invitation");
              } else {
                reject("Oops! I can't find your invitation. Double-check your email address - it should be the one we sent your invitation to.")
              }
            })

          } else {
            reject('I think your email address has a typo. Double-check and try again.');
          }
          vm.loading = false;
        }, 1000);
      });
    }

}]);
