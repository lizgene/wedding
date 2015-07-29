angular.module('app.directives').directive('tabset', function(){
  return {
    restrict: 'E', //element
    transclude: true, //do not destroy contents of div
    scope: {},
    templateUrl: 'tabset.html',
    bindToController: true,
    controllerAs: 'tabset',
    controller: function() {
      var self = this
      self.tabs = []

      self.addTab = function addTab(tab) {
        self.tabs.push(tab)

        if(self.tabs.length === 1) {
          tab.active = true
        }
      }

      self.select = function(selectedTab) {
        angular.forEach(self.tabs, function(tab) {
          if(tab.active && tab !== selectedTab) {
            tab.active = false;
          }
        })

        selectedTab.active = true;
      }
    }
  }
});

//bindToController: true specifies that any values passed into 
// the directive's scope via the scope property are automatically accessible in the controller using this 