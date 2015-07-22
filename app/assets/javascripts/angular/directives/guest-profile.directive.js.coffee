(->
  guestProfile = ()->
    console.log("in directive")
    directive = {
      restrict: 'E',
      templateUrl: 'new-template.html'
    }

    return directive

  app.directive('guestProfile', guestProfile)
)()