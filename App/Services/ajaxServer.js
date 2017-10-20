app.factory('ajaxServer', ['$http', '$q', function ($http, $q) {
    var factory = {
        ajax: function (type, url, data) {
            var defer = $q.defer();
            if (type.toUpperCase() == 'JSONP') {
                $ajax({
                    url: url,
                    dataType: 'jsonp',
                    success: function (data) {
                        defer.resolve(data);
                    },
                    error: function (err) {
                        defer.reject(err);
                    }
                });
                return defer.promise;
            } else {
                $http({
                    url: url,
                    method: type || 'get',
                    data: data || null
                }).success(function (data) {
                    defer.resolve(data);
                }).error(function (err) {
                    defer.reject(err);
                });
                return defer.promise;
            }
        }
    };
    return factory;
}]);