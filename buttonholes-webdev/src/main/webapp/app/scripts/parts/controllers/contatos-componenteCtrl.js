'use strict';

angular.module('suitApp.parts')

.controller('ContatosComponenteCtrl', ['$rootScope','ContatosComponenteService',
    '_', function($rootScope,ContatosComponenteService,_) {
  var self = this;

  self.items = ContatosComponenteService.list();

  self.selectedItem = {};

  self.setItem = function() {
    ContatosComponenteService.set(self.selectedItem);
    $rootScope.$broadcast('update', 'message');
  }

  self.selectedItem = Object.keys(ContatosComponenteService.get()).length === 0 ? null : _.find(self.items, ContatosComponenteService.get());

}]);