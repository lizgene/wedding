angular.module('app.directives').directive('multiStepForm', function(){
  return {
    restrict: 'E', //element
    transclude: true, //do not destroy contents of div
    scope: {
      value: "=formData",
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

      vm.isCurrentStep = function(stepNumber) {
        return vm.currentStep === stepNumber;
      }

      vm.nextStep = function(activeStep) {
        activeStep.callback() //perform any validation or checks required

        var oldStepId = vm.steps.indexOf(activeStep);
        var newStepId = oldStepId + 1;
        var nextActiveStep = vm.steps[newStepId];

        angular.forEach(vm.steps, function(step) {
          if(step.active && step !== nextActiveStep) {
            step.active = false;
          }
        })

        if(newStepId === vm.steps.length) {
          vm.callback()
        } else {
          vm.currentStep = nextActiveStep;
          nextActiveStep.active = true;
        }
      }


    }
  }
});
