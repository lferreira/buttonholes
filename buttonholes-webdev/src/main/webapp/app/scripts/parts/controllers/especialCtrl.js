'use strict';

angular.module('suitApp.parts')

.controller('EspecialCtrl', ['$location','$rootScope','EspecialService','_',
	function($rootScope,$location,EspecialService,_) {
  var self = this;

  self.selectedItem = {};

  self.view = function() {
    $location.path('#/parts/confirm');
  };

  self.setItem = function() {
  	EspecialService.set(self.selectedItem);
  }

  self.selectedItem = EspecialService.get();

}]);