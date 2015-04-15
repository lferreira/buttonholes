"use strict";angular.module("suitApp",["underscore","ui.bootstrap","MessageCenterModule","ngRoute","ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","suitApp.directives","suitApp.home","suitApp.login","suitApp.users","suitApp.order","suitApp.parts","suitApp.version"]).config(["$routeProvider",function(a){a.otherwise({redirectTo:""})}]),angular.module("suitApp.directives",[]).directive("nxEqual",[function(){return{require:"ngModel",link:function(a,b,c,d){return c.nxEqual?(a.$watch(c.nxEqual,function(a){d.$setValidity("nxEqual",a===d.$viewValue)}),void d.$parsers.push(function(b){var e=b===a.$eval(c.nxEqual);return d.$setValidity("nxEqual",e),e?b:void 0})):void console.error("nxEqual expects a model as an argument!")}}}]).directive("ngConfirmClick",[function(){return{link:function(a,b,c){var d=c.ngConfirmClick||"Are you sure?",e=c.confirmedClick;b.bind("click",function(b){window.confirm(d)&&a.$eval(e)})}}}]).directive("selectable",function(){return{restrict:"A",link:function(a,b,c){b.bind("click",function(d){$(".active").each(function(){$(this).removeClass("active")}),b.addClass("active"),a.$apply(c.selectable)})}}}),angular.module("suitApp.home",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home/partials/home.html",controller:"HomeCtrl"})}]),angular.module("suitApp.home").controller("HomeCtrl",[function(){}]),angular.module("suitApp.home").factory("CustomMessageService",["messageCenterService",function(a){var b=this;return b.addMessage=function(b,c){a.add(b,c,{status:a.status.shown,timeout:7e3})},b.addInfoMessage=function(a){b.addMessage("info",a)},b.addWarningMessage=function(a){b.addMessage("warning",a)},b.addDangerMessage=function(a){b.addMessage("danger",a)},b.addSuccessMessage=function(a){b.addMessage("success",a)},{message:function(a,c){b.addMessage(a,c)},dangerMessage:function(a){b.addDangerMessage(a)},successMessage:function(a){b.addSuccessMessage(a)},infoMessage:function(a){b.addInfoMessage(a)},warningMessage:function(a){b.addWarningMessage(a)}}}]),angular.module("suitApp.login",["ngRoute"]).config(["$routeProvider",function(a){a.when("/login",{templateUrl:"views/auth/partials/login.html",controller:"LoginCtrl"}).when("/forgot",{templateUrl:"views/auth/partials/forgot.html"})}]),angular.module("suitApp.login").controller("LoginCtrl",["$location",function(a){var b=this;b.user={username:"",password:""},b.login=function(){console.log(b.user)},function(a){b.errorMessage=a.data.msg}}]),angular.module("suitApp.users",["ngRoute"]).config(["$routeProvider",function(a){a.when("/users",{templateUrl:"views/users/partials/users.html",controller:"UserListCtrl"}).when("/users/new",{templateUrl:"views/users/partials/new.html",controller:"UserNewCtrl"}).when("/users/:userId/edit",{templateUrl:"views/users/partials/edit.html",controller:"UserDetailCtrl"})}]),angular.module("suitApp.users").controller("UserListCtrl",["$location","UserService",function(a,b){var c=this;c.users=b.list(),c.add=function(){console.log(c.user)},c.edit=function(b){console.log(b),a.path("/users/"+b+"/edit")},c["delete"]=function(a){console.log(a)}}]),angular.module("suitApp.users").controller("UserDetailCtrl",["$location","$routeParams",function(a,b){var c=this;c.update=function(){a.path("/users")},c.user={name:b.userId}}]),angular.module("suitApp.users").controller("UserNewCtrl",["$location","UserService",function(a,b){var c=this;c.user={},c.add=function(){b.add(c.user),a.path("/users")}}]),angular.module("suitApp.users").factory("UserService",[function(){var a=this;return a.users=[{id:1,name:"Joao"},{id:2,name:"Maria"},{id:3,name:"Jose"},{id:4,name:"Roberto"},{id:5,name:"Joana"},{id:6,name:"Sebastiana"}],{list:function(){return a.users},add:function(b){a.users.push(b)}}}]),angular.module("suitApp.order",["ngRoute"]).config(["$routeProvider",function(a){a.when("/order",{templateUrl:"views/order/partials/order.html",controller:"OrderCtrl"})}]),angular.module("suitApp.order").controller("OrderCtrl",[function(){}]),angular.module("suitApp.parts",["ngRoute"]).config(["$routeProvider",function(a){a.when("/parts/components",{templateUrl:"views/parts/partials/components.html"}).when("/parts/involucro",{templateUrl:"views/parts/partials/involucro.html"}).when("/parts/tampa-do-involucro",{templateUrl:"views/parts/partials/tampa-do-involucro.html",controller:"TampaInvolucroCtrl"}).when("/parts/tipo-do-componente",{templateUrl:"views/parts/partials/tipo-do-componente.html",controller:"TipoComponenteCtrl"}).when("/parts/contatos-do-componente",{templateUrl:"views/parts/partials/contatos-do-componente.html",controller:"ContatosComponenteCtrl"}).when("/parts/tensao-resistencia",{templateUrl:"views/parts/partials/tensao-resistencia.html",controller:"TensaoResistenciaCtrl"}).when("/parts/cor-do-componente",{templateUrl:"views/parts/partials/cor-do-componente.html",controller:"CorComponenteCtrl"}).when("/parts/especial",{templateUrl:"views/parts/partials/especial.html",controller:"EspecialCtrl"}).when("/parts/confirm",{templateUrl:"views/parts/partials/confirm.html",controller:"ConfirmCtrl"})}]),angular.module("suitApp.parts").controller("InvolucroCtrl",["$location","PartsService","CustomMessageService",function(a,b,c){var d=this;d.next=function(){b.involucroOk()?a.path("/parts/tipo-do-componente"):c.warningMessage("Você ja selecionou Tipo e Tampa do invólucro ?")}}]),angular.module("suitApp.parts").controller("ComponentesCtrl",["ComponentesService","PartsService","_","$scope","$location",function(a,b,c,d,e){var f=this;f.items=a.list(),f.isrr=b.getIsrr(),f.updateComponent=function(){"one"===f.activeItem.value?b.createComponente1():"two"===f.activeItem.value?b.createComponente2():"three"===f.activeItem.value&&b.createComponente3(),f.isrr=b.getIsrr()},f.finishComponent=function(){a.set(f.activeItem.next),f.activeItem=c.find(f.items,a.selected()),f.updateComponent(),e.path("/parts/tipo-do-componente")},f.activeItem=c.find(f.items,a.selected()),f.nextComponent=a.next(f.activeItem.next),d.$on("update",function(a,b){f.updateComponent()})}]),angular.module("suitApp.parts").controller("TipoInvolucroCtrl",["$rootScope","TipoInvolucroService","_",function(a,b,c){var d=this;d.items=b.list(),d.selectedItem={},d.setItem=function(){b.set(d.selectedItem),a.$broadcast("update","message")},d.selectedItem=0===Object.keys(b.get()).length?null:c.find(d.items,b.get())}]),angular.module("suitApp.parts").controller("TampaInvolucroCtrl",["$rootScope","TampaInvolucroService","_",function(a,b,c){var d=this;d.items=b.list(),d.selectedItem={},d.setItem=function(){b.set(d.selectedItem),a.$broadcast("update","message")},d.selectedItem=0===Object.keys(b.get()).length?null:c.find(d.items,b.get())}]),angular.module("suitApp.parts").controller("TipoComponenteCtrl",["$rootScope","TipoComponenteService","_",function(a,b,c){var d=this;d.items=b.list(),d.selectedItem={},d.setItem=function(){b.set(d.selectedItem),a.$broadcast("update","message")},d.selectedItem=0===Object.keys(b.get()).length?null:c.find(d.items,b.get())}]),angular.module("suitApp.parts").controller("ContatosComponenteCtrl",["$rootScope","ContatosComponenteService","_",function(a,b,c){var d=this;d.items=b.list(),d.selectedItem={},d.setItem=function(){b.set(d.selectedItem),a.$broadcast("update","message")},d.selectedItem=0===Object.keys(b.get()).length?null:c.find(d.items,b.get())}]),angular.module("suitApp.parts").controller("TensaoResistenciaCtrl",["$rootScope","TensaoResistenciaService","_",function(a,b,c){var d=this;d.items=b.list(),d.selectedItem={},d.setItem=function(){b.set(d.selectedItem),a.$broadcast("update","message")},d.selectedItem=0===Object.keys(b.get()).length?null:c.find(d.items,b.get())}]),angular.module("suitApp.parts").controller("CorComponenteCtrl",["$rootScope","CorComponenteService","_",function(a,b,c){var d=this;d.items=b.list(),d.selectedItem={},d.setItem=function(){b.set(d.selectedItem),a.$broadcast("update","message")},d.selectedItem=0===Object.keys(b.get()).length?null:c.find(d.items,b.get())}]),angular.module("suitApp.parts").controller("EspecialCtrl",["$location","$rootScope","EspecialService","_",function(a,b,c,d){var e=this;e.selectedItem={},e.view=function(){b.path("/parts/confirm")},e.setItem=function(){c.set(e.selectedItem)},e.selectedItem=c.get()}]),angular.module("suitApp.parts").controller("ConfirmCtrl",["$location","PartsService","_",function(a,b,c){var d=this;b.createComponente1();var e=JSON.stringify(b.getIsrr());console.log(e),d.isrr=b.getIsrr()}]),angular.module("suitApp.parts").factory("PartsService",["TipoInvolucroService","TampaInvolucroService","TipoComponenteService","ContatosComponenteService","TensaoResistenciaService","CorComponenteService","EspecialService",function(a,b,c,d,e,f,g){var h=this;return h.isrr=[],h.componente1={},h.componente2={},h.componente3={},h.createComponente1=function(){h.componente1=h.createPart()},h.createComponente2=function(){h.componente2=h.createPart()},h.createComponente3=function(){h.componente3=h.createPart()},h.involucroOk=function(){return Object.keys(a.get()).length>0&&Object.keys(b.get()).length>0},h.createPart=function(){return{tipoComponente:c.get(),contatosComponente:d.get(),tensaoResistencia:e.get(),cor:f.get()}},{getIsrr:function(){return{tipoInvolucro:a.get(),tampaInvolucro:b.get(),componente1:h.componente1,componente2:h.componente2,componente3:h.componente3,especial:g.get()}},createComponente1:function(){return h.createComponente1(),h.componente1},createComponente2:function(){return h.createComponente2(),h.componente2},createComponente3:function(){return h.createComponente3(),h.componente3},involucroOk:h.involucroOk}}]),angular.module("suitApp.parts").factory("ComponentesService",["_",function(a){var b=this;return b.activeItem="",b.componentes=[{display:"Involucro",value:"inv"},{display:"Componente 1",value:"one",next:"two"},{display:"Componente 2",value:"two",next:"three"},{display:"Componente 3",value:"three",next:"especial"},{display:"Especial",value:"especial"}],b.next=function(c){return a.findWhere(b.componentes,{value:c})},{list:function(){return b.componentes},set:function(c){b.activeItem=a.findWhere(b.componentes,{value:c})},selected:function(){return""===b.activeItem?b.componentes[1]:b.activeItem},next:function(a){return b.next(a)}}}]),angular.module("suitApp.parts").factory("TipoInvolucroService",[function(){var a=this;return a.tipoInvolucros=[{id:1,description:"Comum tampa Baixa"},{id:2,description:"Incêndio tampa Baixa (Quebre o vidro e aperte o botão)"},{id:3,description:"Instrumento tampa Baixa"},{id:4,description:"Comum tampa Alta"},{id:5,description:"Incêndio tampa Alta (Quebre o vidro e aperte o botão)"},{id:6,description:"Instrumento tampa Alta"},{id:7,description:"Incêndio tampa Baixa (Quebre o vidro)"},{id:8,description:"Incêndio tampa Alta (Quebre o vidro)"}],a.tipoInvolucro={},{list:function(){return a.tipoInvolucros},set:function(b){a.tipoInvolucro=b},get:function(){return a.tipoInvolucro}}}]),angular.module("suitApp.parts").factory("TampaInvolucroService",[function(){var a=this;return a.tampaInvolucros=[{id:1,description:"Nenhum Furo"},{id:2,description:"Dois furos horizontal"},{id:3,description:"Dois furos vertical"},{id:4,description:"Três furos, dois embaixo e um emcima"},{id:5,description:"Três furos, dois emcima e uma ebaixo"},{id:6,description:"Três furos, dois no lado esquerdo e um do direito"},{id:7,description:"Três furos, dois no lado direito e um no esquerdo"},{id:8,description:"Quatro furos formando um quadrado"},{id:9,description:"Quatro furos formando um losango"}],a.tampaInvolucro={},{list:function(){return a.tampaInvolucros},set:function(b){a.tampaInvolucro=b},get:function(){return a.tampaInvolucro}}}]),angular.module("suitApp.parts").factory("TipoComponenteService",[function(){var a=this;return a.tipoComponentes=[{id:"A",description:"GBI"},{id:"B",description:"GBIG"},{id:"C",description:"GBEY5"},{id:"D",description:"GBEY3"},{id:"E",description:"GBY"},{id:"F",description:"GBETR"},{id:"G",description:"GBEMO"},{id:"H",description:"GCA/AD"},{id:"I",description:"GCAG"},{id:"J",description:"GCCG"},{id:"K",description:"GSI"},{id:"L",description:"GBEG"},{id:"M",description:"GBPMV"},{id:"N",description:"GBPCO"},{id:"O",description:"GBL"}],a.tipoComponente={},{list:function(){return a.tipoComponentes},set:function(b){a.tipoComponente=b},get:function(){return a.tipoComponente}}}]),angular.module("suitApp.parts").factory("ContatosComponenteService",[function(){var a=this;return a.contatosComponentes=[{id:"0",description:"01"},{id:"1",description:"10"},{id:"2",description:"11"},{id:"3",description:"02"},{id:"4",description:"20"},{id:"5",description:"22"},{id:"6",description:"21"},{id:"7",description:"12"},{id:"8",description:"31"},{id:"9",description:"13"},{id:"A",description:"IN1220"},{id:"B",description:"IN2220"},{id:"C",description:"IN3220"},{id:"D",description:"IN4220"},{id:"E",description:"RS1220"},{id:"F",description:"RS2220"},{id:"G",description:"RS3220"},{id:"H",description:"RC1320"},{id:"I",description:"RC2320"},{id:"J",description:"RC3320"},{id:"K",description:"RIE1320"},{id:"L",description:"RIE2320"},{id:"M",description:"SS1320"},{id:"N",description:"SS2320"},{id:"O",description:"SS1420"},{id:"P",description:"RS1220"},{id:"Q",description:"SS1520"},{id:"R",description:"RP1320"},{id:"S",description:"RP2320"},{id:"T",description:"SC1320"},{id:"U",description:"SC2320"},{id:"V",description:"SC1420"},{id:"W",description:"SC1620"},{id:"Y",description:"IN3232"},{id:"Z",description:"IN4232"}],a.contatoComponente={},{list:function(){return a.contatosComponentes},set:function(b){a.contatoComponente=b},get:function(){return a.contatoComponente}}}]),angular.module("suitApp.parts").factory("TensaoResistenciaService",[function(){var a=this;return a.tensoesResistencias=[{id:"A",description:"12V"},{id:"B",description:"24V"},{id:"C",description:"48V"},{id:"D",description:"60V"},{id:"E",description:"130V"},{id:"F",description:"220V"},{id:"G",description:"10K"},{id:"H",description:"5K"},{id:"I",description:"4K7"},{id:"J",description:"Amperímetro"},{id:"K",description:"Voltímetro"},{id:"L",description:"Pressostato"},{id:"M",description:"Horimetro"},{id:"N",description:"Varistor"}],a.tensaoResistencia={},{list:function(){return a.tensoesResistencias},set:function(b){a.tensaoResistencia=b},get:function(){return a.tensaoResistencia}}}]),angular.module("suitApp.parts").factory("CorComponenteService",[function(){var a=this;return a.coresComponente=[{id:1,description:"Verde"},{id:2,description:"Vermelho"},{id:3,description:"Preto"},{id:4,description:"Amarelo"},{id:5,description:"Azul"},{id:6,description:"Branco"},{id:7,description:"Incolor"}],a.corComponente={},{list:function(){return a.coresComponente},set:function(b){a.corComponente=b},get:function(){return a.corComponente}}}]),angular.module("suitApp.parts").factory("EspecialService",[function(){var a=this;return a.especial=!1,{set:function(b){a.especial=b},get:function(){return a.especial}}}]),angular.module("suitApp.version",["suitApp.version.interpolate-filter","suitApp.version.version-directive"]).value("version","0.1"),angular.module("suitApp.version.version-directive",[]).directive("appVersion",["version",function(a){return function(b,c,d){c.text(a)}}]),angular.module("suitApp.version.interpolate-filter",[]).filter("interpolate",["version",function(a){return function(b){return String(b).replace(/\%VERSION\%/gm,a)}}]);