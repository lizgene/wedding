(->
  GuestCtrl = ($http)->
    GuestCtrl
      .inject = ['$http']

    vm = @
    vm.guest = {}

    vm.addGuest = (invitation)->
      request = $http.post('/api/guests', { guest: vm.guest }).success (data) ->
        vm.guest = {}

    return

  angular
    .module('app')
    .controller('GuestCtrl', GuestCtrl)
)()