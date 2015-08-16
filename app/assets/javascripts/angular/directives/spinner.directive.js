angular.module('app.directives').directive('spinner', function(){
  return {
    restrict: 'E',
    replace: false,
    template: '<i class="fa fa-spinner fa-spin"></i>',
    scope: { loading: '=loading' },
    transclude: true, //maybe add custom spinner stuff later
    link: function (scope, element, attr) {
      scope.$watch('loading', function (val) {
        if(val == true){
          element.show()
        } else {
          element.hide()
        }
      });
    }
  }
});
