(function (require) {
    'use strict';

    var gulp = require('gulp'),
        argv = require('yargs').argv,
        watch = require('gulp-watch'),
        browserSync = require('browser-sync'),
        historyApiFallback = require('connect-history-api-fallback');

    gulp.task('browsersync:serve', function () {
        runTask();

        if ( !! argv.watch) {
            watch('dev/assets/styles/**/*.css', browserSync.reload);
            watch(['dev/index.html', 'dev/app/**/*.tpl'], browserSync.reload);
            watch(['dev/app/**/*.js', 'dev/assets/scripts/**/*.js'], browserSync.reload);
        }
    });

    function runTask() {
        browserSync({
            'notify': true,
            'port': '5000',
            'ui': { 'port': '5001' },
            'server': {
                'baseDir': 'dev',
                'middleware': [historyApiFallback]
            }
        });
    }
})(require);
