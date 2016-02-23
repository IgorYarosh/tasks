'use strict';

/* Controllers */

var taskControllers = angular.module('taskControllers', []);

taskControllers.controller('SetTimeOutController$', function($scope) {
    
      $scope.getMessage = function() {
        setTimeout(function() {
          $scope.$apply(function() {
            //wrapped this within $apply
            $scope.message = 'Hello'; 
            console.log('message:' + $scope.message);
          });
        }, 2000);
      }
      
      $scope.getMessage();
    
    });

taskControllers.controller('SetTimeOutController', function($scope) {
    
      $scope.getMessage = function() {
        setTimeout(function() {
          $scope.message = 'Hello';
          console.log('message:'+$scope.message);
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
          $scope.message = 'Hello';
          console.log('message:'+$scope.message);       
      }
    
    });



