'use strict';

/* Directives */

var taskDirectives = angular.module('taskDirectives', []);

taskDirectives.directive('filelist',function($rootScope) {
  return {
    restrict: 'E',
    transclude: true,  
    scope: {
      list : '=',
      selected : '=',
      cb : '&'
    },

    controller: ['$scope', function($scope) {

      
      $scope.say = function() {         
           $scope.dr.igorWidget("refresh");
      };



    }],

   link: function($scope, $element, $attrs, $ctrl ) {

      var directive = $element;
      $scope.dr = directive; 
      
      directive.igorWidget({zzz: $scope.cb    

      });
      
      directive.igorWidget("setList", $scope.list);
      directive.igorWidget("setSelected", $scope.selected);
      directive.igorWidget("refresh",$element);
           //directive.children()[0]

    },
   
    template: ''
  };
});










