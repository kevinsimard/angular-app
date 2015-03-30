(function (require) {
    'use strict';

    var gulp = require('gulp'),
        argv = require('yargs').argv,
        watch = require('gulp-watch'),
        jshint = require('gulp-jshint'),
        jshintStylish = require('jshint-stylish');

    gulp.task('jshint:validate', function () {
        if ( !! argv.watch) {
            watch([
                'dev/app/**/*.js',
                'dev/assets/scripts/**/*.js'
            ], runTask);
        }
    });

    function runTask() {
        var sources = [
            'dev/app/**/*.js',
            '!dev/app/constants.js',
            'dev/assets/scripts/**/*.js'
        ];

        gulp.src(sources)
            .pipe(jshint())
            .pipe(jshint.reporter(jshintStylish));
    }
})(require);
