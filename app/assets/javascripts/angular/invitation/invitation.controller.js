  angular.module('app.controllers').controller('InvitationCtrl', ['Invitation', 
    function(Invitation) {

      var vm = this;

      vm.message = "Hello World";

      window.invitations = Invitation.index();
      vm.invitations = Invitation.index();

      vm.addGuest = function(){

      };


      // request = $http.post('/api/guests', { guest: vm.guest }).success (data) ->
      //   vm.guest = {}
  }]);