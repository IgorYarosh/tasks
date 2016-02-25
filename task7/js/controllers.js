'use strict';

/* Controllers */

var taskControllers = angular.module('taskControllers', []);


taskControllers.controller('AjaxController$', function($scope, $http, $window) {     

       $scope.list=["File1","File2","File3","File4","File5","File6","File7","File8","File9"];
       $scope.selected=["File1","File2","File5","File8","File9"];

        $scope.cb = function( event, data ) {
            console.log("asdad");
        }
    });