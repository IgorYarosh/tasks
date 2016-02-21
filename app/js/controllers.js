'use strict';

/* Controllers */

var taskControllers = angular.module('taskControllers', []);

 taskControllers.controller('TabsListCtrl', ['$scope','$http', function($scope, $http) {
  
    $http.get('tabs/tabs.json').success(function(tabs) {
      $scope.tabs = tabs;
    });

    $scope.getTabs = function(){
      return $scope.tabs;
    };
  
  }]);

   taskControllers.controller('ExampleController', ['$scope', '$window', function($scope, $window) {
      $scope.greeting = 'Hello';
      $scope.greeting2 = 'World';
      $scope.doGreeting = function(greeting) {
        $window.alert(greeting);
      };


	 $scope.doGreeting2 = function(greeting2) {
	   $window.alert(greeting2);
	 };
    }]);

