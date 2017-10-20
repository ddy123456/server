app.controller('serviceController', ['$scope', 'infoServer', function ($scope, infoServer) {
    infoServer.getData().then(function (result) {
        //$scope.obj = result;
        $scope.banner = result.banner;
        $scope.main_nav = result.main_nav;
        $scope.ad = result.ad;
        $scope.carServer = result.carServer;
        $scope.likes = result.likes;
        $scope.actives = result.actives;
        //console.log( result)
    })
}]);