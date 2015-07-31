  angular.module('app.controllers').controller('InvitationCtrl', 
    ['Invitation', 
    function(Invitation) {

      var vm = this;

      vm.message = "My Invitations";

      vm.invitations = Invitation.index();
      console.log("got invitations")

      vm.addGuest = function(){

      };

      // console.log($templateCache.get('invitations.html'))


      // request = $http.post('/api/guests', { guest: vm.guest }).success (data) ->
      //   vm.guest = {}
  }]);