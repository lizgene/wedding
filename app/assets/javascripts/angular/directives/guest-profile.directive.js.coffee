(->
  guestProfile = ()->
    console.log("in directive")
    directive = {
      restrict: 'A',
      templateUrl: 'new-template.html'
    }

    return directive

  app.directive('guestProfile', guestProfile)
)()