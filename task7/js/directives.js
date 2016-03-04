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

   link: function($scope, $element, $attrs, $ctrl ) {

      var filelist = $element;
      
      filelist.igorWidget(
                           {
                            cb: function(list, selected){
                              if(!$scope.$$phase){
                                $scope.$apply(function(){
                                  $scope.cb(list, selected);
                                });                                
                              } else {
                                $scope.cb(list, selected);
                              }
                            },
                            list : $scope.list,
                            selected: $scope.selected     
                           }
                          );


    },
     template: '<transclude></transclude>'
   
  };
});