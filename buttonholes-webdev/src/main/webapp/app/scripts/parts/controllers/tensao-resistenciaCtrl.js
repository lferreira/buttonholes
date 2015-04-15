'use strict';

angular.module('suitApp.parts')

.controller('TensaoResistenciaCtrl', ['$rootScope','TensaoResistenciaService','_',
	function($rootScope,TensaoResistenciaService,_) {
  var self = this;

  self.items = TensaoResistenciaService.list();

  self.selectedItem = {};

  self.setItem = function() {
    TensaoResistenciaService.set(self.selectedItem);
    $rootScope.$broadcast('update', 'message');
  }

  self.selectedItem = Object.keys(TensaoResistenciaService.get()).length === 0 ? null : _.find(self.items, TensaoResistenciaService.get());

}]);