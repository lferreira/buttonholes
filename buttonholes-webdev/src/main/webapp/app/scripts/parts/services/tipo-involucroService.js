'use strict';

angular.module('suitApp.parts')

.factory('TipoInvolucroService', [function(){
  var self = this;

    self.tipoInvolucros = [
      {id:1,description:'Comum tampa Baixa'},
      {id:2,description:'Incêndio tampa Baixa (Quebre o vidro e aperte o botão)'},
      {id:3,description:'Instrumento tampa Baixa'},
      {id:4,description:'Comum tampa Alta'},
      {id:5,description:'Incêndio tampa Alta (Quebre o vidro e aperte o botão)'},
      {id:6,description:'Instrumento tampa Alta'},
      {id:7,description:'Incêndio tampa Baixa (Quebre o vidro)'},
      {id:8,description:'Incêndio tampa Alta (Quebre o vidro)'}
    ];

    self.tipoInvolucro = {};

    return {
      list: function() {
        return self.tipoInvolucros;
      },
      set: function(tipoInvolucro) {
        self.tipoInvolucro = tipoInvolucro;
      },
      get: function() {
        return self.tipoInvolucro;
      }
    };
  }]);