angular.module('app.directives').directive('step', function(){
  //this is the DDO - directive definition object
  // The '@' symbol is a special symbol in Angular that means this scope property should be a string.
  return {
    restrict: 'E', //element
    transclude: true, //do not destroy contents of div
    template: '<div ng-show="active" ng-transclude></div>',
    require: '^multiStepForm', //The '^' character instructs the directive to move up the scope hierarchy one level and look for the controller on tabset. If the controller can't be found, angular will throw an error.
    scope: {
      number: '@',
      callback: '&onChange'
    }, //if it occurs twice on page, don't keep populating based on previous
    link: function(scope, elem, attr, multiStepFormCtrl) {
      scope.active = multiStepFormCtrl.isCurrentStep()
      multiStepFormCtrl.addStep(scope); //the steps have to register themselves with the multiStepForm ctrl
    }
  }
});
