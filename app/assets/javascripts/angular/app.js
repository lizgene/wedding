'use strict';


var app = angular.module('app', [
  'app.services',
  'app.directives',
  'app.controllers',
  'app.filters',
  'ngRoute',
  'templates',
  'restangular'
  ]);

angular.module('app.services', ['restangular']);

angular.module('app.directives', []);

angular.module('app.filters', []);

angular.module('app.controllers', []);

// var app = angular.module('app', ['ngResource', 'templates', 'app.service', 'app.directive', 'app.filter']);

// fixes rails security issue
app.config(function($httpProvider, RestangularProvider) {
  $httpProvider.defaults.headers.common['X-CSRF-Token'] =
    $('meta[name=csrf-token]').attr('content');

  RestangularProvider.setBaseUrl('/api');

  //rails returns an object. this extracts the array (what angular expects) from the object.
  RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
    var extractedData;

    if (operation === "getList") {
      extractedData = data[what];
      extractedData.error = data.error;

    } else {
      extractedData = data;
    }
    return extractedData;
  });
});

// app.config(['$routeProvider', '$locationProvider',
//   function($routeProvider, $locationProvider) {
//     $routeProvider.
//       when("api/invitations", {
//         templateUrl: 'index.html',
//         controller: 'InvitationCtrl'
//       }).
//       otherwise({
//         redirectTo: '/'
//       });

//     $locationProvider.html5Mode(true);
//   }]);

// sharkweekControllers.controller('ProductDetailCtrl', ['$scope', '$routeParams', '$location', 'Product', 
//   function($scope, $routeParams, $location, Product) {
//     return $scope.product = Product.show({ id: $routeParams.productId });
// }]);

// app.factory("InvitationService", function($resource) {
//   return $resource("/api/invitations/:id", { id: "@id" },
//     {
//       'create':  { method: 'POST' },
//       'index':   { method: 'GET', isArray: true },
//       'show':    { method: 'GET', isArray: false },
//       'update':  { method: 'PUT' },
//       'destroy': { method: 'DELETE' }
//     }
//   );
// });

