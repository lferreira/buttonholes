'use strict';

angular.module('suitApp.parts')

.controller('ConfirmCtrl', ['$location','PartsService','_', function($location,PartsService,_) {
  var self = this;

  PartsService.createComponente1();
  var json = JSON.stringify(PartsService.getIsrr());

  console.log(json);

  self.isrr = PartsService.getIsrr();

}]);