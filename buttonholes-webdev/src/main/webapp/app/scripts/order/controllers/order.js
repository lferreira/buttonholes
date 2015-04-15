'use strict';

angular.module('suitApp.order', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/order', {
    templateUrl: 'views/order/partials/order.html',
    controller: 'OrderCtrl'
  })
}]);