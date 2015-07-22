(->
  Invitation = ($routeParams, Invitation)->

    Invitation
      .$inject = ['$routeParams', 'Invitation']

    vm = @
    vm.message = "Wedding Guest List"
    vm.sendMessage = ()->

    vm.invitations = Invitation.index()

    return

  angular
    .module('app')
    .controller('Invitation', Invitation)
)()