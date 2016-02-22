'use strict';

/* Directives */

var taskDirectives = angular.module('taskDirectives', []);

taskDirectives.directive('myTabs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: ['$scope','$sce', function($scope,$sce) {
      var content = $scope.content = $sce.trustAsHtml("<p>text</p>");

      var panes = $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
        $scope.content = pane.content;
        if (panes.length != 0){
        pane.action();
        
        }
      };

      $scope.addPane = function(pane) {
        var s = $sce.trustAsHtml(pane.content.context.innerHTML);
        pane.content = s;
            panes.push(pane);
      };



      this.addPane = function(pane) {       
        if (panes.length === 0) {
          $scope.select(pane);          
        }
          $scope.addPane(pane);
      };
    }],
    templateUrl: 'partials/my-tabs.html'
  };
});

taskDirectives.directive('myPane', function() {
  return {
    require: '^^myTabs',
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@',
      action: '&'
    },


   link: function($scope, $element, $attrs, $ctrl, $transclude ) {
      var d = $transclude(); 
      $scope.content = d;
      $ctrl.addPane($scope);
            
       
      $transclude(function(clone){
        //var pTag = angular.element(clone[1]);
        //pTag.append(angular.element("<strong> - and to add something.</strong>"));        
        //$element.append(clone);
      });
    }

  };
});
