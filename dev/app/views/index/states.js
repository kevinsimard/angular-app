(function (angular) {
    'use strict';

    angular.module('app')
        .config(config);

    config.$inject = [
        '$stateProvider'
    ];

    function config($stateProvider) {
        $stateProvider.state('index', {
            'abstract': true,
            'url': ''
        });

        $stateProvider.state('index.index', {
            'url': '/',
            'views': {
                '@': {
                    'controllerAs': 'vm', 'controller': 'index.index',
                    'templateUrl': '/app/views/index/templates/index.tpl'
                }
            }
        });
    }
})(angular);
