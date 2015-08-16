angular.module('app.controllers').controller('invitationListCtrl',
  ['Invitation', '$resource', '$q',
  function(Invitation, $resource, $q) {

    var vm = this;

    vm.newInvitation = {};

    vm.loading = true;

    Invitation.query().$promise.then(function(data) {
      vm.loading = false;
      vm.invitations = data.invitations;
    });

    vm.addInvitation = function(newInvitation){
      Invitation.create({invitation: newInvitation}, function(response) {
        vm.invitations.push(response.invitation);
      });
      vm.newInvitation = {};
    };

    vm.deleteInvitation = function(invitation){
      Invitation.delete({id: invitation.id}, function(){
        vm.invitations.splice(vm.invitations.indexOf(invitation), 1);
      });
    };
}]);
