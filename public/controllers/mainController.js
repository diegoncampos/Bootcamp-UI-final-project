myApp.controller('mainController', function ($scope, $http, $location) {
	$scope.pageClass = 'page-home';



	$http.get("http://localhost:3000/timeline?count=100")
	.success(function(response) {$scope.timeline = response;});

	$scope.go = function ( path, x ) {
		$location.path( path );

		localStorage.setItem('data', JSON.stringify(x));
		
	};

	$scope.searching = function (){

		alert($scope.search);

	};


});


