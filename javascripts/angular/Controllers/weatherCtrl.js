app.controller("weatherCtrl", ['$scope', 'weatherser', function($scope, weatherser) {
weatherser.success(function(data){
	$scope.info=data;
	});

}]);