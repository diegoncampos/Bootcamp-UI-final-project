myApp.controller('tweetdetailsController', function($scope) {
    $scope.pageClass = 'page-tweetdetails';

    

    var value = localStorage.getItem('data');

    if (!value) {return;}

    // assume it is an object that has been stringified
    if (value[0] === "{") {
      $scope.tweet = JSON.parse(value);
    }
    
});