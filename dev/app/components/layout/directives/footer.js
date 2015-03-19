(function (angular) {
    'use strict';

    angular.module('app')
        .directive('uiFooter', directive);

    directive.$inject = [];

    function directive() {
        return {
            'link': link,
            'restrict': 'AE',
            'templateUrl': '/app/components/layout/templates/footer.tpl'
        };

        function link(scope, element, attrs) {
            //
        }
    }
})(angular);
