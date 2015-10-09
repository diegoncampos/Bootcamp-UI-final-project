myApp.controller('trendsdetailsController', function($scope, $http, $location) {
	$scope.pageClass = 'page-trendsdetails';



	var value = localStorage.getItem('trend');

    // assume it is an object that has been stringified
    if (value[0] === "{") {
    	$scope.trendSelected = JSON.parse(value);
    }


    $http.get("http://localhost:3000/timeline?count=100")
    .success(function(response) {$scope.timeline = response;});

	$scope.filterFn = function(twit)
	{

		if (twit.entities.hashtags.length){
			for (var i=0; i<twit.entities.hashtags.length; i++) {

				if('#'+twit.entities.hashtags[i].text == $scope.trendSelected.name || twit.entities.hashtags[i].text == $scope.trendSelected.name){   
					
					return true;

				}

			}

		}
		else {
			return false;
		}

	};	

	$scope.go = function ( path, x ) {
		$location.path( path );

		localStorage.setItem('data', JSON.stringify(x));		
	};


});