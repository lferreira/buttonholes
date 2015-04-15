angular.module('suitApp.directives', [])

.directive('nxEqual', [function () {
	return {
        require: 'ngModel',
        link: function (scope, elem, attrs, model) {
            if (!attrs.nxEqual) {
                console.error('nxEqual expects a model as an argument!');
                return;
            }
            scope.$watch(attrs.nxEqual, function (value) {
                model.$setValidity('nxEqual', value === model.$viewValue);
            });
            model.$parsers.push(function (value) {
                var isValid = value === scope.$eval(attrs.nxEqual);
                model.$setValidity('nxEqual', isValid);
                return isValid ? value : undefined;
            });
        }
    };
}])
.directive('ngConfirmClick', [function(){
  return {
    link: function (scope, elem, attr) {
      var msg = attr.ngConfirmClick || "Are you sure?";
      var clickAction = attr.confirmedClick;
      elem.bind('click',function (event) {
        if ( window.confirm(msg) ) {
          scope.$eval(clickAction)
        }
      });
    }
  };
}])
.directive('selectable', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function(e) {
              $(".active").each(function() {
                $(this).removeClass('active');
              });
              element.addClass('active');
              scope.$apply(attrs.selectable);
            });
        }
    }
});