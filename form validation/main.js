var app = angular.module('minmax', []);

app.controller('minmaxCtrl', ['$scope', function($scope){
  $scope.formModel = {};
  $scope.onSubmit = function(valid){
    if (valid) {
      console.log("I've been submitted!");
      console.log($scope.formModel);
    } else {
      console.log("Error");
    }
  };
}]);