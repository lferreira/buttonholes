'use strict';

angular.module('suitApp.parts')

.controller('ComponentesCtrl',['ComponentesService','PartsService',
                                  '_','$scope','$location',function(ComponentesService,PartsService,_,$scope,$location) {
  var self = this;

  self.items = ComponentesService.list();

  self.isrr = PartsService.getIsrr();

  self.updateComponent = function() {
    if(self.activeItem.value === 'one') {
      PartsService.createComponente1();
    } else if(self.activeItem.value === 'two') {
      PartsService.createComponente2();
    } else if(self.activeItem.value === 'three') {
      PartsService.createComponente3(); 
    }
  	self.isrr = PartsService.getIsrr();
  }

  self.finishComponent = function() {
    ComponentesService.set(self.activeItem.next);
    self.activeItem = _.find(self.items, ComponentesService.selected());
    self.updateComponent();
    $location.path('/parts/tipo-do-componente');
  }

  self.activeItem = _.find(self.items, ComponentesService.selected());

  self.nextComponent = ComponentesService.next(self.activeItem.next);

  $scope.$on('update', function (event, arg) { 
 	  self.updateComponent();
  });

}]);