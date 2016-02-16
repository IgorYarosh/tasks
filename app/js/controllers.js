'use strict';

/* Controllers */

var taskControllers = angular.module('taskControllers', []);

taskControllers.controller('parentCtrl1', function($scope) {});

taskControllers.controller('parentCtrl2', function($scope) {});

taskControllers.controller('ChildCtrl1', function($scope, $controller, $rootScope) {
   
    angular.extend(this, $controller('parentCtrl1', {$scope: $scope}));  
   
    $scope.setParentQuery=function(){    	
    $rootScope.query = $scope.ChildCtrl1.query;
    }

});

taskControllers.controller('ChildCtrl2', function($scope, $controller, $rootScope) {
    angular.extend(this, $controller('parentCtrl1', {$scope: $scope}));
});