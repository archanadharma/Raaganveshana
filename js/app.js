var app = angular.module('raagApp', []);

app.controller('mainCtrl', function($scope){

	$scope.query = {};
	// console.log($scope.query);
	$scope.header = [
		{
			displayName: "Raaga",
		  colName: "name"
		},
		{
		  displayName: "Language",
		  colName: "lang"
		},
		{ displayName: "Artist",
			colName: "artist"
		},
		{ displayName: "Album",
			colName: "album"
		},
		{
			displayName: "No. of Hits",
			colName: "hits"
		},
		{ displayName: "Listen",
			colName: "link"
		}
	];
		
	$scope.raagas = [ 
		{
			name: "hamsadhwani",
			lang: "hindi",
			artist: "abc",
			album: "xyz",
			hits: 10
		},
		{
			name: "bhairavi",
			lang: "telugu",
			artist: "tyagaraja",
			album: "xyz",
			hits: 10
		},
		{
			name: "bhairavi",
			lang: "kannada",
			artist: "tyagaraja",
			album: "xyz",
			hits: 10
		},
		{
			name: "bhairavi",
			lang: "Hindi",
			artist: "S.D Burman",
			album: "Guide",
			hits: 10
		},
		{
			name: "bhairavi",
			lang: "telugu",
			artist: "tyagaraja",
			album: "shenai",
			hits: 10
		},
		{
			name: "Kambhoji",
			lang: "telugu",
			artist: "Ravi Shankar",
			album: "Sitar",
			hits: 10
		},
		{
			name: "bhairavi",
			lang: "telugu",
			artist: "A R Rahman",
			album: "xyz",
			hits: 10
		},
		{
			name: "Kalyani",
			lang: "telugu",
			artist: "Annamayya",
			album: "xyz",
			hits: 10
		},
				{
			name: "bhairavi",
			lang: "telugu",
			artist: "tyagaraja",
			album: "xyz",
			hits: 10
		},
		{
			name: "bhairavi",
			lang: "kannada",
			artist: "tyagaraja",
			album: "xyz",
			hits: 10
		},
		{
			name: "bhairavi",
			lang: "Hindi",
			artist: "S.D Burman",
			album: "Guide",
			hits: 10
		},
		{
			name: "bhairavi",
			lang: "telugu",
			artist: "tyagaraja",
			album: "shenai",
			hits: 10
		},
		{
			name: "Kambhoji",
			lang: "telugu",
			artist: "Ravi Shankar",
			album: "Sitar",
			hits: 10
		},
		{
			name: "bhairavi",
			lang: "telugu",
			artist: "A R Rahman",
			album: "xyz",
			hits: 10
		},
		{
			name: "Kalyani",
			lang: "telugu",
			artist: "Annamayya",
			album: "xyz",
			hits: 10
		},
				{
			name: "bhairavi",
			lang: "telugu",
			artist: "tyagaraja",
			album: "xyz",
			hits: 10
		},
		{
			name: "bhairavi",
			lang: "kannada",
			artist: "tyagaraja",
			album: "xyz",
			hits: 10
		},
		{
			name: "bhairavi",
			lang: "Hindi",
			artist: "S.D Burman",
			album: "Guide",
			hits: 10
		},
		{
			name: "bhairavi",
			lang: "telugu",
			artist: "tyagaraja",
			album: "shenai",
			hits: 10
		},
		{
			name: "Kambhoji",
			lang: "telugu",
			artist: "Ravi Shankar",
			album: "Sitar",
			hits: 10
		},
		{
			name: "bhairavi",
			lang: "telugu",
			artist: "A R Rahman",
			album: "xyz",
			hits: 10
		},
		{
			name: "Kalyani",
			lang: "telugu",
			artist: "Annamayya",
			album: "xyz",
			hits: 10
		}
	];

	$scope.propertyName = 'name';
	$scope.reverse = false;

	$scope.sortBy = function(propertyName){
		$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
		$scope.propertyName = propertyName;
	};

});

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
