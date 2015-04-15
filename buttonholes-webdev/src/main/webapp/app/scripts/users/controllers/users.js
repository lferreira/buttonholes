'use strict';

angular.module('suitApp.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'views/users/partials/users.html',
    controller: 'UserListCtrl'
  }).when('/users/new', {
  	templateUrl: 'views/users/partials/new.html',
  	controller: 'UserNewCtrl'
  }).when('/users/:userId/edit', {
  	templateUrl: 'views/users/partials/edit.html',
  	controller: 'UserDetailCtrl'
  });
}]);