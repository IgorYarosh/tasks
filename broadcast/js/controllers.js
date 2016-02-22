var taskControllers = angular.module('taskControllers', []);




 taskControllers.controller('ParentCtrl', ['$scope','$rootScope', function($scope,$rootScope) {
   
  }]);

 taskControllers.controller('SiblingTwoCtrl', ['$scope','$rootScope', function($scope,$rootScope) {  
  
  }]);



 taskControllers.controller('ChildCtrl', ['$scope','$rootScope', function($scope,$rootScope) {
     $scope.text = "Igor";


     $scope.sendTo = function() {
        $rootScope.$broadcast('ChildCtrl:hello', $scope.text);
      };
    
  }]);



 taskControllers.controller('SiblingOneCtrl', ['$scope','$window', function($scope, $window) {
  
	$scope.$on('ChildCtrl:hello', function (event, data) {
	     $window.alert("hello " + data);
	  });
	  
  }]);