(function (angular) {
    'use strict';

    angular.module('app', [
        'ui.router',
        'mlang'
    ]);

    angular.element(document)
        .ready(bootstrap);

    function bootstrap() {
        angular.bootstrap(document, ['app']);
    }
})(angular);
