'use strict';

/* Directives */

var taskDirectives = angular.module('taskDirectives', []);

taskDirectives.directive('filelist',function($rootScope) {
  return {
    restrict: 'E',  
    scope: {
      list : '=',
      selected : '=',
      cb : '&'
    },

   link: function($scope, $element, $attrs, $ctrl ) {

      var filelist = $element;
      
      filelist.igorWidget(
                           {
                            cb: $scope.cb,
                            list : $scope.list,
                            selected: $scope.selected     
                           }
                         );


    },
   
  };
});










