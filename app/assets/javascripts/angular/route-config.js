app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when("/",
      { templateUrl: "invitations.html",
        controller: "InvitationCtrl",
        controllerAs: "invitation" })
    .when("/about",
      { templateUrl: "new-template.html",
        controller: "InvitationCtrl as invitation" })
    .otherwise({ redirectTo: "/" });
});