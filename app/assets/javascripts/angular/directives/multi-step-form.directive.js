angular.module('app.directives').directive('multiStepForm', function(){
  return {
    restrict: 'E', //element
    transclude: true, //do not destroy contents of div
    scope: {
      name: "@formName",
      callback: "&onSubmit"
    },
    templateUrl: 'directives/multi-step-form.html',
    bindToController: true,
    controllerAs: 'multiStepForm',
    controller: function() {
      var vm = this
      vm.steps = []

      vm.addStep = function addStep(step) {
        vm.steps.push(step)

        if(vm.steps.length === 1) {
          vm.currentStep = step; //set first step to currentStep
        }
      }

      vm.isFirstStep = function() {
        return vm.currentStep.number == 1;
      }

      vm.isCurrentStep = function(step) {
        return vm.currentStep === step;
      }

      vm.animateStep = function(activeStep, goForward) {
        var oldStepId = vm.steps.indexOf(activeStep);
        //indicates move 1 step forward or back
        var newStepId = goForward ? (oldStepId + 1) : (oldStepId - 1);
        var nextActiveStep = vm.steps[newStepId];

        angular.forEach(vm.steps, function(step) {
          if(step.active && step !== nextActiveStep) {
            step.active = false;
          }
        })

        vm.currentStep = nextActiveStep;
        nextActiveStep.active = true;

        if(newStepId === (vm.steps.length - 1)) {
          vm.complete = true;
          vm.callback()
        }
      }

      vm.lastStep = function(activeStep) {
        vm.animateStep(activeStep, false)
      }

      vm.nextStep = function(activeStep) {
        var promise = activeStep.callback(); //perform any validation or checks required
        if(promise){
          promise.then(function(response) {
            //hide any error messages if they exist
            vm.errorMessage = null;
            vm.animateStep(activeStep, true);
          }, function(value) {
            vm.errorMessage = value;
          });
        } else {
          vm.errorMessage = null;
          vm.animateStep(activeStep, true);
        }
      }

    }
  }
});
