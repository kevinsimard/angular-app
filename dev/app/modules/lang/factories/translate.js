(function (angular, _) {
    "use strict";

    angular.module("mlang")
        .factory("mlang.translate", factory);

    factory.$inject = [
        "$translate",
        "constants"
    ];

    function factory($translate, constants) {
        var locale = constants.locale;

        function get(id, params) {
            return $translate.instant(id, params);
        }

        function getLocale() {
            return locale;
        }

        function setLocale(lang) {
            if (! _.contains(constants.locales, lang)) {
                lang = constants.locale;
            }

            return $translate.use((locale = lang));
        }

        return {
            get: get,
            getLocale: getLocale,
            setLocale: setLocale
        };
    }
})(angular, _);
