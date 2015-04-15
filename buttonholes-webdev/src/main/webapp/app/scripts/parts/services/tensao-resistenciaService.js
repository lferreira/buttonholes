'use strict';

angular.module('suitApp.parts')

.factory('TensaoResistenciaService', [function(){
  var self = this;

  self.tensoesResistencias = [
    {id:'A',description:'12V'},
    {id:'B',description:'24V'},
    {id:'C',description:'48V'},
    {id:'D',description:'60V'},
    {id:'E',description:'130V'},
    {id:'F',description:'220V'},
    {id:'G',description:'10K'},
    {id:'H',description:'5K'},
    {id:'I',description:'4K7'},
    {id:'J',description:'Amperímetro'},
    {id:'K',description:'Voltímetro'},
    {id:'L',description:'Pressostato'},
    {id:'M',description:'Horimetro'},
    {id:'N',description:'Varistor'}
  ];

  self.tensaoResistencia = {};

  return {
    list: function() {
      return self.tensoesResistencias;
    },
    set: function(tensaoResistencia) {
      self.tensaoResistencia = tensaoResistencia;
    },
    get: function() {
      return self.tensaoResistencia;
    }
  };
}]);