'use strict';

angular.module('suitApp.parts')

.factory('CorComponenteService', [function(){
  var self = this;

  self.coresComponente = [
    {id:1,description:'Verde'},
    {id:2,description:'Vermelho'},
    {id:3,description:'Preto'},
    {id:4,description:'Amarelo'},
    {id:5,description:'Azul'},
    {id:6,description:'Branco'},
    {id:7,description:'Incolor'}
  ];

  self.corComponente = {};

  return {
    list: function() {
      return self.coresComponente;
    },
    set: function(corComponente) {
      self.corComponente = corComponente;
    },
    get: function() {
      return self.corComponente;
    }
  };
}]);