'use strict';

angular.module('suitApp.parts')

.controller('TipoInvolucroCtrl',['$rootScope','TipoInvolucroService','_',
    function($rootScope,TipoInvolucroService,_) {
  var self = this;

  self.items = TipoInvolucroService.list();

  self.selectedItem = {};

  self.setItem = function() {
    TipoInvolucroService.set(self.selectedItem);
    $rootScope.$broadcast('update', 'message');
  }

  self.selectedItem = Object.keys(TipoInvolucroService.get()).length === 0 ? null : _.find(self.items, TipoInvolucroService.get());

}]);