'use strict';

angular.module('suitApp.parts')

.controller('CorComponenteCtrl', ['$rootScope','CorComponenteService','_',
	function($rootScope,CorComponenteService,_) {
  var self = this;

self.items = CorComponenteService.list();

  self.selectedItem = {};

  self.setItem = function() {
    CorComponenteService.set(self.selectedItem);
    $rootScope.$broadcast('update', 'message');
  }

  self.selectedItem = Object.keys(CorComponenteService.get()).length === 0 ? null : _.find(self.items, CorComponenteService.get());

}]);