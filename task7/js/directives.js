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
      
      var widget = filelist.igorWidget(
                           {
                            cb: function(list, selected){
                              if(!$scope.$$phase){
                                $scope.$apply(function(){
                                  $scope.cb({
                                    list: list,
                                    selected: selected
                                  });
                                });                                
                              } else {
                                $scope.cb({
                                  list: list,
                                  selected: selected
                                });
                              }
                            },
                            list : $scope.list,
                            selected: $scope.selected     
                           }
                          );
      $scope.$watch( 'selected' ? $scope.selected, function(oldValue, newValue){
        //widget.setSelected(newValue)
      }, true);


    },
     template: '<transclude></transclude>'
   
  };
});