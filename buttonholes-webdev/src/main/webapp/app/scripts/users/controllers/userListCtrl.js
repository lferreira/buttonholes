'use strict';

angular.module('suitApp.users')

.controller('UserListCtrl', ['$location','UserService', function($location,UserService) {
  var self = this;

  self.users = UserService.list();

  self.add = function() {
  	console.log(self.user);
  };

  self.edit = function(userId) {
  	console.log(userId);
  	$location.path('/users/' + userId + '/edit');
  };

  self.delete = function(userId) {
    console.log(userId);
  };

}]);