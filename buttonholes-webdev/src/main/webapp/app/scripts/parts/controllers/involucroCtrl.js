'use strict';

angular.module('suitApp.parts')

.controller('InvolucroCtrl', ['$location','PartsService','CustomMessageService', 
	function($location,PartsService,CustomMessageService) {
  var self = this;

  self.next = function() {
	if (PartsService.involucroOk()) {
		$location.path('/parts/tipo-do-componente');
	} else {
		CustomMessageService.warningMessage('Você ja selecionou Tipo e Tampa do invólucro ?');
	}
  };

}]);