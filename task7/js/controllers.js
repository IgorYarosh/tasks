'use strict';

/* Controllers */

var taskControllers = angular.module('taskControllers', []);


taskControllers.controller('AjaxController$', function($scope, $http, $window) {     

       $scope.list=["File1","File2","File3"];
       $scope.selected=["File1","File2"];

    });