'use strict';

angular.module('suitApp.parts')

.controller('ConfirmCtrl', ['$location','PartsService','TestService','_', function($location,PartsService,TestService,_) {
  var self = this;

  PartsService.createComponente1();

  self.add = function() {
    TestService.save(PartsService.getIsrr());
  };
  
  self.isrr = PartsService.getIsrr();

}]);