'use strict';

/* Controllers */

var taskControllers = angular.module('taskControllers', []);



 taskControllers.controller('TabsListCtrl', ['$scope','$http', function($scope, $http) {
  

 
  $http.get('tabs/tabs.json').success(function(data) {
    $scope.tabsArray = data;
  });

  
  }]);

 taskControllers.controller('ExampleController', ['$scope', function($scope) {
    $scope.title = 'Lorem Ipsum';
    $scope.text = 'Neque porro quisquam est qui dolorem ipsum quia dolor...';
  }]);

  taskControllers.controller('TabController', ['$scope', function($scope) {
    $scope.tabNumber = 1;

    $scope.setTab = function(tabNumber){
      $scope.tabNumber = tabNumber;
    };

    $scope.isSet = function(tabNumber){
      return $scope.tabNumber === tabNumber;
    };
}]);