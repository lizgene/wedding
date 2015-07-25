(->
  guestProfile = ()->
    console.log("in directive")
    directive = {
      restrict: 'E',
      templateUrl: 'new-template.html'
    }

    return directive

  angular.module('app.directives').directive('guestProfile', guestProfile)
)()