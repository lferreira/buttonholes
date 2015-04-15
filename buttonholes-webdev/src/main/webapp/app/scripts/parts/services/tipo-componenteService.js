'use strict';

angular.module('suitApp.parts')

.factory('TipoComponenteService', [function(){
  var self = this;

  self.tipoComponentes = [
    {id:'A',description:'GBI'},
    {id:'B',description:'GBIG'},
    {id:'C',description:'GBEY5'},
    {id:'D',description:'GBEY3'},
    {id:'E',description:'GBY'},
    {id:'F',description:'GBETR'},
    {id:'G',description:'GBEMO'},
    {id:'H',description:'GCA/AD'},
    {id:'I',description:'GCAG'},
    {id:'J',description:'GCCG'},
    {id:'K',description:'GSI'},
    {id:'L',description:'GBEG'},
    {id:'M',description:'GBPMV'},
    {id:'N',description:'GBPCO'},
    {id:'O',description:'GBL'}
  ];

  self.tipoComponente = {};

  return {
    list: function() {
      return self.tipoComponentes;
    },
    set: function(tipoComponente) {
      self.tipoComponente = tipoComponente;
    },
    get: function() {
      return self.tipoComponente;
    }
  };
}]);