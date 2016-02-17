'use strict';

/* Controllers */

var taskControllers = angular.module('taskControllers', []);

taskControllers.controller('parentCtrl1', function($scope) {});

taskControllers.controller('parentCtrl2', function($scope) {});

taskControllers.controller('ChildCtrl1', function($scope, $controller) {   
    angular.extend(this, $controller('parentCtrl1', {$scope: $scope}));  
});

taskControllers.controller('ChildCtrl2', function($scope, $controller) {
    angular.extend(this, $controller('parentCtrl1', {$scope: $scope}));
});