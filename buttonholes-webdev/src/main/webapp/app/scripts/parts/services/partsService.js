'use strict';

angular.module('suitApp.parts')

.factory('PartsService', ['TipoInvolucroService',
                          'TampaInvolucroService',
                          'TipoComponenteService',
                          'ContatosComponenteService',
                          'TensaoResistenciaService',
                          'CorComponenteService',
                          'EspecialService',  
                          function(TipoInvolucroService,
                                   TampaInvolucroService,
                                   TipoComponenteService,
                                   ContatosComponenteService,
                                   TensaoResistenciaService,
                                   CorComponenteService,
                                   EspecialService){
  var self = this;

  self.isrr = [];

  self.componente1 = {};
  self.componente2 = {};
  self.componente3 = {};

  self.createComponente1 = function() {
    self.componente1 = self.createPart();
  }

  self.createComponente2 = function() {
    self.componente2 = self.createPart();
  }

  self.createComponente3 = function() {
    self.componente3 = self.createPart();
  }

  self.involucroOk = function() {
    return (Object.keys(TipoInvolucroService.get()).length > 0 
        && Object.keys(TampaInvolucroService.get()).length > 0);
  }

  self.createPart = function() {
    return {
      tipoComponente: TipoComponenteService.get(),
      contatosComponente: ContatosComponenteService.get(),
      tensaoResistencia: TensaoResistenciaService.get(),
      cor: CorComponenteService.get()
    }
  }

  return {
    getIsrr: function() {
      return {
        tipoInvolucro: TipoInvolucroService.get(),
        tampaInvolucro: TampaInvolucroService.get(),
        componente1 : self.componente1,
        componente2 : self.componente2,
        componente3 : self.componente3,
        especial: EspecialService.get()
      };
    },
    createComponente1: function() {
      self.createComponente1();
      return self.componente1;
    },
    createComponente2: function() {
      self.createComponente2();
      return self.componente2;
    },
    createComponente3: function() {
      self.createComponente3();
      return self.componente3;
    },

    involucroOk: self.involucroOk
  };
}]);