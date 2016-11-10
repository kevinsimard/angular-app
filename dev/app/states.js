(function (angular) {
    "use strict";

    angular.module("app")
        .config(config);

    config.$inject = [
        "$locationProvider",
        "$urlRouterProvider"
    ];

    function config($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix("!");

        // fix internet explorer 9
        $urlRouterProvider.when("", "/");

        // redirect 404 page not found
        $urlRouterProvider.otherwise("/");
    }
})(angular);
