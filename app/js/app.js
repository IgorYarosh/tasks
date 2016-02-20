'use strict';

/* App Module */

var taskApp = angular.module('taskApp', ['taskControllers','taskDirectives']).run(function($rootScope, $http, $templateCache) { 
    $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();


    $http.get('tabs/tabs.json').success(function(tabs) {
      $scope.tabs = tabs;  
    });

    $scope.getTabs = function(){
      return $scope.tabs;
    };

   });
});  


