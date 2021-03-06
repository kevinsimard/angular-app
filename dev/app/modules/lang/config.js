(function (angular) {
    "use strict";

    angular.module("mlang")
        .config(config);

    config.$inject = [
        "$injector",
        "$stateProvider"
    ];

    function config($injector, $stateProvider) {
        var originalUrlDecorator = $stateProvider.decorator("url");

        $stateProvider.decorator("url", function (state) {
            var constants = $injector.get("constants");

            if (angular.equals(state.url, "/")) {
                state.url = "?/";
            }

            if (state.abstract) {
                state.url = ["/{_locale:(?:",
                    constants.locales.join("|"),
                    ")?}", state.url].join("");
            }

            return originalUrlDecorator(state);
        });
    }
})(angular);
