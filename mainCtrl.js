angular.module('assessment').controller('mainCtrl', function($scope, mainService, $stateParams){

  $scope.getProducts = mainService.getProducts().then(function(products){
    $scope.products = products;
  });
  $scope.productId = $stateParams.id;
  $scope.getDetails = mainService.getDetails($scope.productId).then(function(details){
    $scope.details = details;
  });
});
