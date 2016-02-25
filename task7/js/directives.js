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
      callback : '&'
    },

    controller: ['$scope',function($scope) {


      $scope.createWidget = function() {

        console.log("asd");
/*        $(".igorWidget").igorWidget();
        $(".igorWidget").igorWidget("setList", [ "file111","file222","filezzzzz" ]);
        $(".igorWidget").igorWidget("setSelected", [ "file111","file222"]);*/
      };

      this.createWidget2 = function() {
        console.log("asd");
/*        $(".igorWidget").igorWidget();
        $(".igorWidget").igorWidget("setList", [ "file111","file222","filezzzzz" ]);
        $(".igorWidget").igorWidget("setSelected", [ "file111","file222"]);*/
      };

    }],


   link: function($scope, $element, $attrs, $ctrl ) {
    $rootScope.list = $scope.list;
        $rootScope.selected = $scope.selected;
            

    },
   
    template: '<div class="igorWidget"></div>'
  };
});










