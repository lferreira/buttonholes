'use strict';

angular.module('suitApp.parts')

.factory('ComponentesService', ['_',function(_){
  var self = this;

  self.activeItem = '';

  self.componentes = [
    {
      display: 'Involucro',
      value: 'inv',
    },
    {
      display: 'Componente 1',
      value: 'one',
      next: 'two'
    },
    {
      display: 'Componente 2',
      value: 'two',
      next: 'three'
    },
    {
      display: 'Componente 3',
      value: 'three',
      next: 'especial'
    },
    {
      display: 'Especial',
      value: 'especial'
    }   
  ];

  self.next = function(next) {
    return _.findWhere(self.componentes, {value: next});
  }

  return {
    list: function() {
      return self.componentes;
    },
    set: function(value) {
      self.activeItem = _.findWhere(self.componentes, {value: value});
    },
    selected: function() {
      return self.activeItem === '' ? self.componentes[1] : self.activeItem;
    },
    next: function(next) {
      return self.next(next);
    }
  };
}]);