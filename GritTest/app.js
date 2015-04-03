var app = angular.module('app', ['ngTouch', 'ui.grid']);
 
app.controller('MainCtrl', function ($scope, $http) {
    
    
    
    $http.get('100.json').success(function(data) {
    $scope.myData = data;
  });
 
  
});