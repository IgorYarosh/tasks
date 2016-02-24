'use strict';

/* Controllers */

var taskControllers = angular.module('taskControllers', []);


taskControllers.controller('AjaxController$', function($scope, $http, $window) {     


      $scope.say = function() {                
               
                   $http({
                          method: 'GET',
                          url: 'http://localhost:8000/task7/json/Files.json'       
                   }).success(function(data){                                                                                              
                        console.log(data); 
                        $scope.list=data;
                        $scope.selected=data[0];
                        //$('.igorWidget').igorWidget("setValue","1");                                                          
                   }).error(function(){                        
                        console.log("error");   
                   });  
                   
      }
    
      $scope.say();


    });