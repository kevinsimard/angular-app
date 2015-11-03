(function (require) {
    'use strict';

    var gulp = require('gulp'),
        KarmaServer = require('karma').Server,
        requireDir = require('require-dir'),
        runSequence = require('run-sequence'),
        taskListing = require('gulp-task-listing');

    // register all tasks
    requireDir('./gulp/tasks/');

    // development environment(s)
    gulp.task('dev', function (callback) {
        runSequence(
            ['constant:generate',
            'locale:generate',
            'template:generate'],
            'browsersync:serve',
            'jshint:validate',
            callback
        );
    });

    // staging/live environments
    gulp.task('www', ['copy:www'], function (callback) {
        runSequence(
            ['constant:generate',
            'locale:generate',
            'template:generate'],
            'jshint:validate',
            'minify:www',
            callback
        );
    });

    // run unit tests
    gulp.task('test', [
        'constant:generate',
        'locale:generate',
        'template:generate'
    ], function () {
        new KarmaServer({
            singleRun: true,
            configFile: __dirname + '/karma.conf.js'
        }).start();
    });

    // list all available tasks
    gulp.task('default', taskListing);
    gulp.task('help', taskListing);
})(require);
