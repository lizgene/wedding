(->
  Event = ()->
    vm = @
    vm.name = {}
    vm.sendMessage = ()->

    return

  angular
    .module('app')
    .controller('Event', Event)
)()