var app = angular.module('raagApp', ['angularUtils.directives.dirPagination']);

app.controller('mainCtrl', ['$scope', '$http', function($scope, $http){

	$scope.query = {}; //Will handle queries for filtering data in the table
	
	$scope.header = [];
		$http.get("../data/raagaTableHeaders.json").success(function(response){
			$scope.header = response;
		});
		
	$scope.raagas = []; //Declaring an empty array for Raagas
	$http.get("../data/raagaDataRecords.json").success(function(response){
		$scope.raagas = response;
	});


	$scope.sortKey = 'name';
	$scope.reverse = false;

	$scope.sortBy = function(keyname){
		$scope.sortKey = keyname;
		$scope.reverse = !$scope.reverse;
		
	};

}]);

// Directive to Dynamically update the ng-model within ng-repeat

app.directive('dynamicModel', ['$compile', '$parse', function ($compile, $parse) {
    return {
        restrict: 'A',
        terminal: true,
        priority: 100000,
        link: function (scope, elem) {
            var name = $parse(elem.attr('dynamic-model'))(scope);
            elem.removeAttr('dynamic-model');
            elem.attr('ng-model', name);
            $compile(elem)(scope);
        }
    };
}]);
