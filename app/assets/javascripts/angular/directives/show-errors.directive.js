angular.module('app.directives').directive('showErrors', function(){
  //sets the bootstrap form-group 'has-success' or 'has-error' class if angular defines an input as invalid
  return {
    restrict: 'A', //attribute
    transclude: true, //do not destroy contents of div
    scope: {},
    link: function(scope, el, attr) {

      el.bind('blur', function() {
        var element = this;
        if(isInvalid(element)){
          element.closest(".form-group").classList.add("has-error");
        } else {
          element.closest(".form-group").classList.add("has-success");
        }
      })

      el.bind('focus', function() {
        this.closest(".form-group").classList.remove("has-success");
        this.closest(".form-group").classList.remove("has-error");
      })

      var isInvalid = function(element) {
        return = ((element.classList.contains("ng-invalid") || element.classList.contains("ng-invalid-email")) && !element.classList.contains("ng-pristine"));
      }


    }
  }
});
