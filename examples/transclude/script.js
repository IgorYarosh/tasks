angular.module('app', []);

angular.module('app').directive("standardTransclude", function(){
  return {
    transclude: true,
    template: "<div><div ng-transclude></div><strong>That we have added to!</strong></div>"
  };
});

angular.module('app').directive("overwriteTransclude", function(){
  return {
    transclude: true,
    link: function($scope, $element, $attrs, $ctrl, $transclude) {
      $transclude(function(clone){
        var pTag = angular.element(clone[1]);
        pTag.append(angular.element("<strong> - and to add something.</strong>"));
        $element.append(pTag);
      });
    }
  };
});