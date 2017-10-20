var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('service', {
            url: '/service',
            templateUrl: 'App/View/_service.html',
            controller: 'serviceController'
        })
        .state('money', {
            url: '/money',
            templateUrl: 'App/View/_money.html'
        });
    $urlRouterProvider.otherwise('/service');
});