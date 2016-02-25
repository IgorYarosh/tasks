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



    }],


   link: function($scope, $element, $attrs, $ctrl ) {

      var igorWidget = $(".igorWidget").igorWidget();

      
      igorWidget.igorWidget("setList", [ "File1","File2","File3","File4","File5","File6","File7","File8","File9" ]);
      igorWidget.igorWidget("setSelected", [ "File1","File2","File5","File8","File9" ]);
      igorWidget.igorWidget("refresh");
           

    },
   
    template: '<div class="igorWidget"></div>'
  };
});










