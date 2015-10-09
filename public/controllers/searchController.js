myApp.controller('searchController',['$scope', '$http', '$location', 'ajax', function ($scope, $http, $location, AJAX) {
	$scope.pageClass = 'page-search';
	

	$scope.searching = function () {

		$http.get("http://localhost:3000/search?q="+$scope.search.replace("#", "%23"))
		.success(function(response) {$scope.searchList = response;});
	};

	$scope.go = function ( path, x ) {
		$location.path( path );

		localStorage.setItem('data', JSON.stringify(x));
	
	};

}]);