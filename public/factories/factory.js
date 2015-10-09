myApp.factory('ajax', function ($http) {

  var query = function (params, cb) { // cb = callback
    if (params && params.url && params.url.length) {
      $http({ // ajax
        method: params.method || 'GET',
        url: params.url,
        params: params.params || {}
      })
        .then(function (res) { // success
          cb(res.data);
        }, function (res) { // error

        });
      }
    };

   

    return {
      query: query
    };
  });