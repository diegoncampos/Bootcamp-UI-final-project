var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'pages/page-home.html',
    controller: 'mainController'
  })
  .when('/bloked', {
    templateUrl: 'pages/page-bloked.html',
    controller: 'blokedController'
  })
  .when('/trends', {
    templateUrl: 'pages/page-trends.html',
    controller: 'trendsController'
  })
  .when('/tweetdetails', {
    templateUrl: 'pages/page-tweetdetails.html',
    controller: 'tweetdetailsController'
  })
  .when('/trendsdetails', {
    templateUrl: 'pages/page-trendsdetails.html',
    controller: 'trendsdetailsController'
  })
  .when('/search', {
    templateUrl: 'pages/page-search.html',
    controller: 'searchController'
  });

});

