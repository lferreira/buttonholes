'use strict';

angular.module('suitApp.users')

.controller('UserDetailCtrl', ['$location','$routeParams', function($location,$routeParams) {
  var self = this;

  self.update = function() {
    $location.path('/users');
  };

  self.user = {name: $routeParams.userId};

}]);