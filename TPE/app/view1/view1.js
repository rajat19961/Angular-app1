'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  })
  .when('/home/:setid',{
    templateUrl : 'view1/view1_details.html',
      controller : 'view1DetailsController'
  });
  
})

.controller('View1Ctrl', function($scope,$http) {
$http.get('json/TPE.json').success(function(response){
$scope.sets = response;    
});
})
.controller('view1DetailsController',function($scope, $routeParams, $http, $filter){
    var setId = $routeParams.setid;
    $http.get('json/TPE.json').success(function(response){
        $scope.set = $filter('filter')(response,function(d){
            return d.id == setId;
        })[0];
    });
});