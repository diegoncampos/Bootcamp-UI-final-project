myApp.controller('trendsController', ['$scope', '$http', '$location', 'ajax', 'geolocalisation',function ($scope, $http, $location, AJAX, GEOLOCALISATION) {
	$scope.pageClass = 'page-trends';


	// $http.get("http://localhost:3000/trends?id=23424747")
	// .success(function(response) {$scope.trendsList = response;});

	// $http.get("http://localhost:3000/myplace?lat=-38.7116780&long=-62.2680780")
	//     .success(function(response) {$scope.geo = response;});
	//     console.log("GEO"+$scope.geo);


	$scope.go = function ( path, x ) {
		$location.path( path );

		localStorage.setItem('trend', JSON.stringify(x));

	};

	
	$scope.id  = 23424747;

	var getTrends =(function () {

		AJAX.query({
			url: 'http://localhost:3000/trends',
			params: {'id' : $scope.id},
        }, function (data) { // callback

        	if (data.length) {
        		$scope.trendsList = data;
        	}
        });

	})();

	var onClick = function () {
		$scope.loading = true;

		GEOLOCALISATION.getUserCoords(function (coordinates) {
			$scope.loading = false;
			$scope.msg = coordinates
			? 'lat: ' + coordinates.coords.latitude + ', lng: ' + coordinates.coords.longitude
			: 'Coordinates couldn\'t be determined.';
          $scope.$apply(); // assure that $scope changes are applied to the view
      });
	};

	$scope.onClick = onClick;
	$scope.coordsAvailable = GEOLOCALISATION.canGetCoords;

	console.log(GEOLOCALISATION.canGetCoords);




}]);


