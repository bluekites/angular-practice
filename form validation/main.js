var app = angular.module('minmax', []);

app.controller('minmaxCtrl', ['$scope', function($scope){
  $scope.formModel = {};
  $scope.onSubmit = function(){
    console.log("I've been submitted!");
    console.log($scope.formModel);
  };
}]);