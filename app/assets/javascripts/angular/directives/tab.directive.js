angular.module('app.directives').directive('tab', function(){
  //this is the DDO - directive definition object
  // The '@' symbol is a special symbol in Angular that means this scope property should be a string.
  return {
    restrict: 'E', //element
    transclude: true, //do not destroy contents of div
    template: '<div role="tabpanel" ng-show="active" ng-transclude></div>',
    require: '^tabset', //The '^' character instructs the directive to move up the scope hierarchy one level and look for the controller on tabset. If the controller can't be found, angular will throw an error.
    scope: { heading: '@' }, //if it occurs twice on page, don't keep populating based on previous
    link: function(scope, elem, attr, tabsetCtrl) {
      scope.active = false;
      tabsetCtrl.addTab(scope); //the tabs have to register themselves with the tabset ctrl
    }
  }
  //scope is like $scope, elem is the actual html element, attr is any attribute son the element (attr.href, etc.)
});