'use strict';

/* App Module */

var taskApp = angular.module('taskApp', ['taskControllers']).run(function($rootScope) {    
    var sharedObject = {query:""};
    $rootScope.sharedObject = sharedObject;
})
