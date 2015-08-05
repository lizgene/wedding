(->
  guestProfile = ()->
    directive = {
      restrict: 'A',
      templateUrl: 'admin/guest-profile.html'
    }

    return directive

  angular.module('app.directives').directive('guestProfile', guestProfile)
)()
