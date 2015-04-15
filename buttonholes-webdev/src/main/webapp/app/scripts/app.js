'use strict';

// Declare app level module which depends on views, and components
angular.module('suitApp', [
  'underscore',
  'ui.bootstrap',
  'MessageCenterModule',
  'ngRoute',
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'suitApp.directives',
  'suitApp.home',
  'suitApp.login',
  'suitApp.users',
  'suitApp.order',
  'suitApp.parts',
  'suitApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: ''});
}]);
