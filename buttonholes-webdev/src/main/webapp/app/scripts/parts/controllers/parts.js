'use strict';

angular.module('suitApp.parts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/parts/components', {
    templateUrl: 'views/parts/partials/components.html'
  }).when('/parts/involucro', {
    templateUrl: 'views/parts/partials/involucro.html'
  }).when('/parts/tampa-do-involucro', {
  	templateUrl: 'views/parts/partials/tampa-do-involucro.html',
  	controller: 'TampaInvolucroCtrl'
  }).when('/parts/tipo-do-componente',{
  	templateUrl: 'views/parts/partials/tipo-do-componente.html',
  	controller: 'TipoComponenteCtrl'
  }).when('/parts/contatos-do-componente', {
  	templateUrl: 'views/parts/partials/contatos-do-componente.html',
  	controller: 'ContatosComponenteCtrl'
  }).when('/parts/tensao-resistencia', {
  	templateUrl: 'views/parts/partials/tensao-resistencia.html',
  	controller: 'TensaoResistenciaCtrl'
  }).when('/parts/cor-do-componente', {
  	templateUrl: 'views/parts/partials/cor-do-componente.html',
  	controller: 'CorComponenteCtrl'
  }).when('/parts/especial',{
  	templateUrl: 'views/parts/partials/especial.html',
  	controller: 'EspecialCtrl'
  }).when('/parts/confirm', {
    templateUrl: 'views/parts/partials/confirm.html',
    controller: 'ConfirmCtrl'
  });
}]);