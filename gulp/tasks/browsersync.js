(function (require) {
    'use strict';

    var gulp = require('gulp'),
        argv = require('yargs').argv,
        plugins = require('gulp-load-plugins')();

    gulp.task('browsersync:serve', function () {
        var browserSync = task();

        if ( !! argv.watch) {
            plugins.watch('dev/index.html', browserSync.reload);
            plugins.watch('dev/assets/locales/**/*', browserSync.reload);
            plugins.watch('dev/assets/styles/**/*.css', browserSync.reload);
            plugins.watch(['dev/app/**/*.js', 'dev/assets/scripts/**/*.js'], browserSync.reload);
        }
    });

    function task() {
        var browserSync = require('browser-sync'),
            historyApiFallback = require('connect-history-api-fallback');

        return browserSync({
            'open': false,
            'port': '5000',
            'ui': { 'port': '5001' },
            'server': {
                'baseDir': 'dev',
                'middleware': [historyApiFallback]
            }
        });
    }
})(require);
