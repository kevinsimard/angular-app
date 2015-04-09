(function (angular) {
    'use strict';

    angular.element(document)
        .ready(bootstrap);

    function bootstrap() {
        angular.bootstrap(document, ['app']);
    }
})(angular);
