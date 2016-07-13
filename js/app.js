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
		},
		{
			name: "bhairavi",
			lang: "kannada",
			artist: "tyagaraja",
			album: "xyz",
			rating: 10
		},
		{
			name: "bhairavi",
			lang: "Hindi",
			artist: "S.D Burman",
			album: "Guide",
			rating: 10
		},
		{
			name: "bhairavi",
			lang: "telugu",
			artist: "tyagaraja",
			album: "shenai",
			rating: 10
		},
		{
			name: "Kambhoji",
			lang: "telugu",
			artist: "Ravi Shankar",
			album: "Sitar",
			rating: 10
		},
		{
			name: "bhairavi",
			lang: "telugu",
			artist: "A R Rahman",
			album: "xyz",
			rating: 10
		},
		{
			name: "Kalyani",
			lang: "telugu",
			artist: "Annamayya",
			album: "xyz",
			rating: 10
		}
	];

	$scope.propertyName = 'name';
	$scope.reverse = false;

	$scope.sortBy = function(propertyName){
		$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
		$scope.propertyName = propertyName;
	};

});