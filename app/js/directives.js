'use strict';

/* Directives */

var taskDirectives = angular.module('taskDirectives', []);

 taskDirectives.directive('tabs', function(){
							      return {
							        restrict: 'E',
							        transclude: true,
							        scope: { title:'@',tabsarray:'=' },
							        template:  '<ng-transclude></ng-transclude>'+
							                   '<div ng-include src="\'partials/Tab30.html\'"></div>'							       
							      };
							  })
