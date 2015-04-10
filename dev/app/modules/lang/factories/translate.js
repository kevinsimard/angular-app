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
        var promise;

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

        function setLocale(locale) {
            if ( ! _.contains(constants.locales, locale)) {
                locale = constants.locale;
            }

            return (promise = $translate.use(locale));
        }

        function getLocale() {
            return promise;
        }

        return {
            'has': has,
            'add': add,
            'remove': remove,
            'setLocale': setLocale,
            'getLocale': getLocale
        };
    }
})(angular, _);
