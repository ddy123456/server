app.factory('infoServer', ['ajaxServer', function (ajaxServer) {
    return {
        getData: function () {
            return ajaxServer.ajax('get', './Data/data.json');
        }
    }
}]);