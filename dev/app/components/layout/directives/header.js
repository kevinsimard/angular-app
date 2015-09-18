(function (angular) {
    'use strict';

    angular.module('app')
        .directive('uiHeader', directive);

    directive.$inject = [];

    function directive() {
        return {
            link: link,
            restrict: 'AE',
            templateUrl: 'components/layout/templates/header.tpl'
        };

        function link(scope, element, attrs) {
            //
        }
    }
})(angular);
