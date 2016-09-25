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
      email: 'dean@dean.com',
      birthdate: '09/06/1983',
      hobby: 'Rock climbing'
    },
    {
      name: 'Lean',
      email: 'dean@dean.com',
      birthdate: '09/06/1983',
      hobby: 'Calisthenics'
    }
  ];
  
  $scope.search = {};
  $scope.selectedPerson = null;
  $scope.selectedIndex = null;
  $scope.selectPerson = function(person, index) {
    $scope.selectedIndex = index;
    $scope.selectedPerson = person;
  };
}]);