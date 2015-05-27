(function (angular, _) {
    'use strict';

    angular.module('mlang')
        .run(run);

    run.$inject = [
        '$rootScope',
        'mlang.translate'
    ];

    function run($rootScope, translate) {
        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams) {
                var locale = toParams._locale;

                translate.setLocale(locale);
            });
    }
})(angular, _);
