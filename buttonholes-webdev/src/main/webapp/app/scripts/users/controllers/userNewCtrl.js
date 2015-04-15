'use strict';

angular.module('suitApp.users')

.controller('UserNewCtrl', ['$location','UserService', function($location,UserService) {
  var self = this;

  self.user = {};

  self.add = function() {
  	UserService.add(self.user)
    $location.path('/users');
  };

}]);