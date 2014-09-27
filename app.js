var app = angular.module('app', [])

app.directive('transcludeExample', function(){
	return{
		restrict: 'E', 
		transclude: true,
		template: '<div>This is content from the directive. <ng-transclude></ng-transclude></div>',
		link: function(scope, element, attrs){
			console.log(scope);
		}
	}
})






