// angular.module('app.directives').directive('editOnClick', function(){
//     console.log("in directive");
//
//   var editorTemplate = '<span ng-click="edit()" ng-hide="editing">{{ value }}</span><input autofocus ng-model="value" ng-blur="save()" ng-show="editing">';
//
//   //By adding a ? before the directive name, we’re saying it’s optional, which prevents Angular from throwing an error if ngModel isn’t found
//   return {
//     restrict: 'A',
//     scope: { saveCallback: '&',
//              value: '='},
//     require: "?ngModel", //include the controller from ngModel into the link function
//     template: editorTemplate,
//     link: function(scope, element, attrs, ngModel) {
//
//       scope.value = attrs.value;
//
//       scope.editing = false;
//
//       scope.edit = function(){
//         scope.editing = true;
//       }
//
//       scope.save = function(){
//         scope.editing = false;
//       }
//
//     }
//   }
// });

app.directive("editOnClick", function() {
    var editorTemplate = '<div class="click-to-edit">' +
        '<div ng-hide="view.editorEnabled">' +
            '{{value}} ' +
            '<a ng-click="enableEditor()">Edit</a>' +
        '</div>' +
        '<div ng-show="view.editorEnabled">' +
            '<input ng-model="view.editableValue">' +
            '<a href="#" ng-click="save()">Save</a>' +
            ' or ' +
            '<a ng-click="disableEditor()">cancel</a>.' +
        '</div>' +
    '</div>';

    return {
        restrict: "A",
        replace: true,
        template: editorTemplate,
        scope: {
            value: "=editOnClick",
            callback: "&saveCallback"
        },
        controller: function($scope, $timeout) {
            window.value = $scope.value;
            $scope.view = {
                editableValue: $scope.value,
                editorEnabled: false
            };

            $scope.enableEditor = function() {
                $scope.view.editorEnabled = true;
                $scope.view.editableValue = $scope.value;
            };

            $scope.disableEditor = function() {
                $scope.view.editorEnabled = false;
            };

            $scope.save = function() {
                $scope.value = $scope.view.editableValue;
                $scope.disableEditor();
                // $scope.$apply() //this will work too but throws an error
                //need to wait for digest cycle so object is updated
                $timeout( function(){ $scope.callback(); }, 1000);
            };
        }
    };
});
