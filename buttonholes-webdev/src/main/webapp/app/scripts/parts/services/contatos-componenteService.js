'use strict';

angular.module('suitApp.parts')

.factory('ContatosComponenteService', [function(){
  var self = this;

  self.contatosComponentes = [
    {id:'0',description:'01'},
    {id:'1',description:'10'},
    {id:'2',description:'11'},
    {id:'3',description:'02'},
    {id:'4',description:'20'},
    {id:'5',description:'22'},
    {id:'6',description:'21'},
    {id:'7',description:'12'},
    {id:'8',description:'31'},
    {id:'9',description:'13'},
    {id:'A',description:'IN1220'},
    {id:'B',description:'IN2220'},
    {id:'C',description:'IN3220'},
    {id:'D',description:'IN4220'},
    {id:'E',description:'RS1220'},
    {id:'F',description:'RS2220'},
    {id:'G',description:'RS3220'},
    {id:'H',description:'RC1320'},
    {id:'I',description:'RC2320'},
    {id:'J',description:'RC3320'},
    {id:'K',description:'RIE1320'},
    {id:'L',description:'RIE2320'},
    {id:'M',description:'SS1320'},
    {id:'N',description:'SS2320'},
    {id:'O',description:'SS1420'},
    {id:'P',description:'RS1220'},
    {id:'Q',description:'SS1520'},
    {id:'R',description:'RP1320'},
    {id:'S',description:'RP2320'},
    {id:'T',description:'SC1320'},
    {id:'U',description:'SC2320'},
    {id:'V',description:'SC1420'},
    {id:'W',description:'SC1620'},
    {id:'Y',description:'IN3232'},
    {id:'Z',description:'IN4232'},
  ];

  self.contatoComponente = {};

  return {
    list: function() {
      return self.contatosComponentes;
    },
    set: function(contatoComponente) {
      self.contatoComponente = contatoComponente;
    },
    get: function() {
      return self.contatoComponente;
    }
  };
}]);