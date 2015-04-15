'use strict';

describe('suitApp.users module', function() {

  beforeEach(module('suitApp.users'));

  describe('user controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('UserListCtrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});