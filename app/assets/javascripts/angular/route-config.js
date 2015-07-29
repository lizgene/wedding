app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when("/",
      { templateUrl: "invitations.html",
        controller: "InvitationCtrl as invitation" })
    .when("/about",
      { templateUrl: "new-template.html",
        controller: "InvitationCtrl as invitation" })
    .when("/contacts/:id",
      { templateUrl: "<%= asset_path('contacts/show.html') %> ",
        controller: "ContactsShowCtrl" })
    .when("/contacts/:id/edit",
      { templateUrl: "<%= asset_path('contacts/edit.html') %> ",
        controller: "ContactsEditCtrl" })
    .otherwise({ redirectTo: "/contacts" });
});