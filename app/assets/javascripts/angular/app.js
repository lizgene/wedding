'use strict';


var app = angular.module('app', [
  'app.services',
  'app.directives',
  'app.controllers',
  'app.filters',
  'ngRoute',
  'templates',
  'restangular',
  'ui.router'
  ]);

angular.module('app.services', ['restangular']);

angular.module('app.directives', []);

angular.module('app.filters', []);

angular.module('app.controllers', []);
