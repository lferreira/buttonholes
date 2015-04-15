'use strict';

angular.module('suitApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/auth/partials/login.html',
    controller: 'LoginCtrl'
  }).when('/forgot', {
  	templateUrl: 'views/auth/partials/forgot.html'
  });
}]);