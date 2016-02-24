'use strict';

/* Controllers */

var taskControllers = angular.module('taskControllers', []);


taskControllers.controller('AjaxController$', function($scope, $http, $window, $interval) {     
    
      $scope.say = function() {                
         $interval(function() {         
                   $http({
                          method: 'GET',
                          url: 'http://localhost:8000/task7/json/Files.json'       
                   }).success(function(data){                                                                      
                        $window.alert($scope.message=JSON.stringify(data));                                                             
                   }).error(function(){
                        $window.alert("error");
                   });  
              }, 2000);        
      }
    
      $scope.say();

    });