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
                        console.log($scope.message=JSON.stringify(data)); 
                        $('.igorWidget').igorWidget("setValue","1");                                                          
                   }).error(function(){                        
                        console.log("error");   
                   });  
              }, 2000);        
      }
    
      $scope.say();

      //$("widgetAPI").getValue();

    });