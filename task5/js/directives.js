'use strict';

/* Directives */

var taskDirectives = angular.module('taskDirectives', ['taskServices']);

taskDirectives.directive('dir1', function() {
  return {
    restrict: 'E',   
    scope: {
      data1 : '='
    },

    controller: ['$scope','$window','shareService', function($scope,$window,shareService) {

      $scope.text1 = "text1";
      
      $scope.say = function() {         
         $window.alert("Text1 " + shareService.getText2());
      };

      $scope.setText1 = function() {         
         shareService.setText1($scope.text1);
      };

    }],
   
    templateUrl: 'partials/dir1.html'
  };
});

taskDirectives.directive('dir2', function() {
  return {
    restrict: 'E',   
    scope: {
      data1 : '='
    },

    controller: ['$scope','$window','shareService', function($scope,$window,shareService) {

      $scope.text2 = "text2";
      
      $scope.say = function() {         
         $window.alert("Text1 " + shareService.getText1());
      };


      $scope.setText2 = function() {         
         shareService.setText2($scope.text2);
      };

    }],
   
    templateUrl: 'partials/dir2.html'
  };
});








