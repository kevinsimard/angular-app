(function (require) {
    'use strict';

    var gulp = require('gulp'),
        browserSync = require('browser-sync'),
        historyApiFallback = require('connect-history-api-fallback');

    gulp.task('browsersync:serve', function () {
        browserSync({
            'notify': true,
            'port': '5000',
            'ui': { 'port': '5001' },
            'server': {
                'baseDir': 'dev',
                'middleware': [historyApiFallback]
            }
        });
    });
})(require);
