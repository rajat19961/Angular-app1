'use strict';

// Declare app level module which depends on views, and components
angular.module('TPEapp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2'
  
]).
config(function($routeProvider) {
    
 $routeProvider
 .otherwise({redirectTo:'/home'});
 

  
});
