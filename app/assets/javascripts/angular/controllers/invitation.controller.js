  angular.module('app.controllers').controller('InvitationCtrl', 
    ['Invitation', 
     '$templateCache',
    function(Invitation, $templateCache) {

      var vm = this;

      vm.message = "My Invitations";

      window.invitations = Invitation.index();
      vm.invitations = Invitation.index();

      vm.addGuest = function(){

      };

      console.log($templateCache.get('invitations.html'))


      // request = $http.post('/api/guests', { guest: vm.guest }).success (data) ->
      //   vm.guest = {}
  }]);