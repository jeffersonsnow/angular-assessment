angular.module('assessment').service('mainService', function($http, $stateParams){
  this.getProducts = function(){
      return $http({
        method: 'GET',
        url: 'http://practiceapi.devmounta.in/products'
      }).then(function(response){
        if(response.status === 200){
          return response.data;
        }
      });
  };
  this.getDetails = function(id){
    return $http({
      method: "GET",
      url: 'http://practiceapi.devmounta.in/products/' + id
    }).then(function(response){
      if(response.status === 200){
        return response.data;
      }
    });
  };

});
