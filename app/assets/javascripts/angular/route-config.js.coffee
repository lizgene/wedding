(->
  config = ($routeProvider)->
    $routeProvider
      .when('/', {
        templateUrl: 'index.html'
        controller: 'Event as vm' #vm stands for ViewModel - just a naming convention.
      });
  angular
    .module('app')
    .config(config)
)()