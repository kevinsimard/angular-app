(function (require) {
    'use strict';

    var gulp = require('gulp'),
        karma = require('karma').server,
        requireDir = require('require-dir'),
        runSequence = require('run-sequence'),
        taskListing = require('gulp-task-listing');

    // register all tasks
    requireDir('./gulp/tasks/');

    // development environment(s)
    gulp.task('dev', function (callback) {
        runSequence(
            ['constant:generate',
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
            'template:generate'],
            'jshint:validate',
            'minify:www',
            callback
        );
    });

    // run unit tests
    gulp.task('test', [
        'constant:generate',
        'template:generate'
    ], function () {
        karma.start({
            'singleRun': true,
            'configFile': __dirname + '/karma.conf.js'
        });
    });

    // list all available tasks
    gulp.task('default', taskListing);
    gulp.task('help', taskListing);
})(require);
