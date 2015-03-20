(function (angular, _) {
    'use strict';

    angular.module('mlang')
        .run(run);

    run.$inject = [
        '$rootScope',
        'mlang.localisation'
    ];

    function run($rootScope, localisation) {
        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                var locale = toParams._locale,
                    toPart = _.first(toState.name.split('.')),
                    fromPart = _.first(fromState.name.split('.'));

                localisation.setLocale(locale);
                localisation.add(toPart);
                localisation.remove(fromPart);
            });
    }
})(angular, _);
