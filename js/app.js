var app = angular.module('raagApp', []);

app.controller('mainCtrl', function($scope){

	$scope.raagas = [ 
		{
			name: "hamsadhwani",
			lang: "hindi",
			artist: "abc",
			album: "xyz",
			rating: 10
		},
		{
			name: "bhairavi",
			lang: "telugu",
			artist: "tyagaraja",
			album: "xyz",
			rating: 10
		}
	];

});