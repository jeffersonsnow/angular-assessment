angular.module('assessment').directive('productDirective', function(){
  return {
    templateUrl:'./views/product-tmpl.html',
    restrict: 'EA',
    scope: {
      product: '='
    },
    controller: function($scope, $stateParams){
      $scope.showImage = false;
    }
  };

});
