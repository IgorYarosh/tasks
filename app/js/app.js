'use strict';

/* App Module */

var taskApp = angular.module('taskApp', ['taskControllers','taskDirectives']).run(function($rootScope, $templateCache) { 
    $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
   });
});  
    
