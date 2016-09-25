var app = angular.module('myApp', []);

app.controller('mainCtrl', ['$scope', function($scope){
  
  $scope.persons = [
    {
      name: 'Dean',
      email: 'dean@dean.com',
      birthdate: '09/06/1983',
      hobby: 'Videogame'
    },
    {
      name: 'Bean',
      email: 'bean@bean.com',
      birthdate: '09/06/1983',
      hobby: 'Rock climbing'
    },
    {
      name: 'Lean',
      email: 'lean@lean.com',
      birthdate: '09/06/1983',
      hobby: 'Calisthenics'
    }
  ];
  
  $scope.search = {};
  $scope.order = "name";
  $scope.selectedPerson = null;
  $scope.selectedIndex = null;
  $scope.selectPerson = function(person, index) {
    $scope.selectedIndex = index;
    $scope.selectedPerson = person;
  };
}]);