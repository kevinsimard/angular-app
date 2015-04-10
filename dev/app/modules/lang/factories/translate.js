(function (angular, _) {
    'use strict';

    angular.module('mlang')
        .factory('mlang.translate', factory);

    factory.$inject = [
        '$timeout',
        '$translate',
        '$translatePartialLoader',
        'constants'
    ];

    function factory($timeout, $translate, $translatePartialLoader, constants) {
        var locale = constants.locale;

        function has(part) {
            return $translatePartialLoader.isPartAvailable(part);
        }

        function add(part) {
            $translatePartialLoader.addPart(part);
            $timeout($translate.refresh);
        }

        function remove(part) {
            $translatePartialLoader.deletePart(part, true);
        }

        function setLocale(lang) {
            if ( ! _.contains(constants.locales, lang)) {
                lang = constants.locale;
            }

            return $translate.use((locale = lang));
        }

        function getLocale() {
            return locale;
        }

        return {
            'has': has,
            'add': add,
            'remove': remove,
            'getLocale': getLocale,
            'setLocale': setLocale
        };
    }
})(angular, _);
