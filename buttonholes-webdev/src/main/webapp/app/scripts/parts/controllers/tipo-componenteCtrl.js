'use strict';

angular.module('suitApp.parts')

.controller('TipoComponenteCtrl',['$rootScope','TipoComponenteService',
                                  '_',function($rootScope,TipoComponenteService,_) {
  var self = this;

  self.items = TipoComponenteService.list();

  self.selectedItem = {};

  self.setItem = function() {
    TipoComponenteService.set(self.selectedItem);
    $rootScope.$broadcast('update', 'message');
  }

  self.selectedItem = Object.keys(TipoComponenteService.get()).length === 0 ? null : _.find(self.items, TipoComponenteService.get());

}]);