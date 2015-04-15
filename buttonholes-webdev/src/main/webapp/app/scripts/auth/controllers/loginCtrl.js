'use strict';

angular.module('suitApp.login')

.controller('LoginCtrl', ['$location',function($location) {
  var self = this;
  self.user = {username:'',password:''};
  self.login = function() {
  	console.log(self.user);
  }, function(error) {
  	self.errorMessage = error.data.msg;
  }
}]);