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
            function (event, toState, toParams, fromState, fromParams) {
                var locale = toParams._locale,
                    toPart = _.first(toState.name.split('.')),
                    fromPart = _.first(fromState.name.split('.'));

                translate.setLocale(locale);

                if ( ! _.isEmpty(fromPart)) { translate.remove(fromPart); }
                if ( ! _.isEmpty(toPart)) { translate.add(toPart); }
            });
    }
})(angular, _);
