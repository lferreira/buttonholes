'use strict';

angular.module('suitApp.parts')

.factory('TampaInvolucroService', [function(){
  var self = this;

    self.tampaInvolucros = [
      {id:1,description:'Nenhum Furo'},
      {id:2,description:'Dois furos horizontal'},
      {id:3,description:'Dois furos vertical'},
      {id:4,description:'Três furos, dois embaixo e um emcima'},
      {id:5,description:'Três furos, dois emcima e uma ebaixo'},
      {id:6,description:'Três furos, dois no lado esquerdo e um do direito'},
      {id:7,description:'Três furos, dois no lado direito e um no esquerdo'},
      {id:8,description:'Quatro furos formando um quadrado'},
      {id:9,description:'Quatro furos formando um losango'}
    ];

    self.tampaInvolucro = {};

    return {
      list: function() {
        return self.tampaInvolucros;
      },
      set: function(tampaInvolucro) {
        self.tampaInvolucro = tampaInvolucro;
      },
      get: function() {
        return self.tampaInvolucro;
      }
    };
  }]);