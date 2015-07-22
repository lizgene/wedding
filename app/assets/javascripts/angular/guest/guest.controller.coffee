(->
  Guest = ()->
    vm = @
    vm.guest = {}
    vm.addGuest = (invitation)->
      invitation.guests.push(vm.guest)
      vm.guest = {}

    return

  angular
    .module('app')
    .controller('Guest', Guest)
)()