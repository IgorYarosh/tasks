'use strict';

/* Controllers */

var taskControllers = angular.module('taskControllers', []);

taskControllers.controller('SetTimeOutController$', function($scope,$timeout) {
    
    $timeout(function() {
         $scope.message = 'Hello'; 
            console.log('message:' + $scope.message);
    }, 2000);
    
    });

taskControllers.controller('SetTimeOutController', function($scope) {
    
      $scope.getMessage = function() {
        setTimeout(function() {
          $scope.$apply(function() {
            //wrapped this within $apply
            $scope.message = 'Hello2'; 
            console.log('message:' + $scope.message);
          });
        }, 2000);
      }
      
      $scope.getMessage();
    
    });

taskControllers.controller('ClickController$', function($scope) {
          
      $scope.say = function() {        
          $scope.message = 'Hello';
          console.log('message:'+$scope.message);       
      }

    
    });

taskControllers.controller('ClickController', function($scope) {
    
      $scope.say = function() {        
          //$scope.$apply(function() {
	          $scope.message = 'Hello3';
	          console.log('message:'+$scope.message); 

          //});    
      }
    
    });


 

   function say(){
    alert("adssa");
   }

taskControllers.controller('AjaxController$', function($scope,$http,$window) {
    
      $scope.saydd = function() {        
         $http({
        method: 'GET',
        url: 'http://localhost:8000/task6/json/hello.json'       
     }).success(function(data){       
        $window.alert(JSON.stringify(data));
    }).error(function(){
        $window.alert("error");
    });          
      }
    
    });

taskControllers.controller('AjaxController', function($scope,$http,$window) {
    
      $scope.saydd = function() {        
         $http({
        method: 'GET',
        url: 'http://localhost:8000/task6/json/hello.json'       
     }).success(function(data){       
        $window.alert("hello "+ data);
    }).error(function(){
        $window.alert("error ");
    });          
      }
    
    });

      






