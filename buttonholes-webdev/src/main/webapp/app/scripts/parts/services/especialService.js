'use strict';

angular.module('suitApp.parts')

.factory('EspecialService', [function(){
  var self = this;

  self.especial = false;

  return {
    set: function(especial) {
      self.especial = especial;
    },
    get: function() {
      return self.especial;
    }
  };
  
}]);