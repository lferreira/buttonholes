'use strict';

angular.module('suitApp.users')

.factory('UserService', [function(){
	var self = this;

    self.users = [
  	  {id:1,name:'Joao'},
  	  {id:2,name:'Maria'},
  	  {id:3,name:'Jose'},
  	  {id:4,name:'Roberto'},
  	  {id:5,name:'Joana'},
  	  {id:6,name:'Sebastiana'}
    ];	
    return {
      list: function() {
        return self.users;
      },
      add: function(user){
        self.users.push(user);
      }
    };
  }]);