'use strict';

angular.module('suitApp.parts')

.factory('TestService', ['$resource', function($resource){
	return $resource("/api/tipo-involucros/:id")
}]);