var app = angular.module('myApp', []);
// Remember code smells if you're not careful with the root scope
app.controller('parentCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
  
}]);

app.controller('childCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
  $scope.reset = function(){
    $rootScope.info = 'Reset by child';
  };
}]);