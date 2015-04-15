'use strict';

angular.module('suitApp.parts')

.controller('TampaInvolucroCtrl', ['$rootScope','TampaInvolucroService','_',
	function($rootScope,TampaInvolucroService,_) {
  var self = this;

  self.items = TampaInvolucroService.list();

  self.selectedItem = {};

  self.setItem = function() {
    TampaInvolucroService.set(self.selectedItem);
    $rootScope.$broadcast('update', 'message');
  }

  self.selectedItem =  Object.keys(TampaInvolucroService.get()).length === 0 ? null : _.find(self.items, TampaInvolucroService.get());

}]);