(function (angular) {
    'use strict';

    angular.module('app')
        .config(config);

    config.$inject = [
        '$stateProvider'
    ];

    function config($stateProvider) {
        $stateProvider.state('index', {
            'url': '/',
            'abstract': true
        });

        $stateProvider.state('index.index', {
            'url': '',
            'views': {
                '@': {
                    'controller': 'index.index',
                    'templateUrl': 'views/index/templates/index.tpl'
                }
            }
        });
    }
})(angular);
