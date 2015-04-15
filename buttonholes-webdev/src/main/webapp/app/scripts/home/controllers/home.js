'use strict';

angular.module('suitApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home/partials/home.html',
    controller: 'HomeCtrl'
  })
}]);