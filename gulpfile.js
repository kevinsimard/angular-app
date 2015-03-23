(function (require) {
    'use strict';

    var gulp = require('gulp'),
        requireDir = require('require-dir'),
        taskListing = require('gulp-task-listing');

    // register all tasks
    requireDir('./gulp/tasks');

    // list all available tasks
    gulp.task('default', taskListing);
    gulp.task('help', taskListing);
})(require);
