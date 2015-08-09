app.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state("home",
      { url: "/",
        templateUrl: "home/intro.html" })
    .state("cast",
      { url: "/cast",
        templateUrl: "home/cast.html" })
    .state("story",
      { url: "/story",
        templateUrl: "home/story.html" })
    .state("details",
      { url: "/details",
        templateUrl: "home/details.html" })
    .state("guide",
      { url: "/guide",
        templateUrl: "home/guide.html" })
    .state("rsvp",
      { url: "/rsvp",
        templateUrl: "home/rsvp.html",
        controller: 'rsvpCtrl',
        controllerAs: 'rsvp' })
    .state("faq",
      { url: "/faq",
        templateUrl: "home/faq.html" })
    .state("admin",
      { url: "/admin",
        templateUrl: "admin/manage-event.html",
        controller: "manageEventCtrl",
        controllerAs: "event"  })
    .state('invitation', {
      url: '/invitations/{id}',
      templateUrl: 'admin/manage-invitation.html',
      controller: 'manageInvitationCtrl',
      controllerAs: 'invitation'
    });
});
