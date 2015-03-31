(function (require) {
    'use strict';

    var gulp = require('gulp'),
        requireDir = require('require-dir'),
        runSequence = require('run-sequence'),
        taskListing = require('gulp-task-listing');

    // register all tasks
    requireDir('./gulp/tasks/');

    // development environment(s)
    gulp.task('dev', function () {
        runSequence(
            ['constant:generate',
            'template:generate'],
            'browsersync:serve',
            'jshint:validate'
        );
    });

    // staging/live environments
    gulp.task('www', function () {
        runSequence(
            'copy:www',
            ['constant:generate',
            'template:generate'],
            'jshint:validate'
        );
    });

    // list all available tasks
    gulp.task('default', taskListing);
    gulp.task('help', taskListing);
})(require);
