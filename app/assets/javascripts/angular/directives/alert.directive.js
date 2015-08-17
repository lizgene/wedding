angular.module('app.directives').directive('alert', function(){

  var alertTemplate =
  '<div class="alert alert-info text-center alert-dismissable" role="alert">' +
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
    '{{ message }}' +
  '</div>'

  return {
    restrict: 'E',
    replace: false,
    template: alertTemplate,
    scope: { message: '@' },
  }
});
