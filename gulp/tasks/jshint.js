(function (require) {
    'use strict';

    var gulp = require('gulp'),
        argv = require('yargs').argv,
        jshint = require('gulp-jshint'),
        jshintStylish = require('jshint-stylish');

    if ( !! argv.watch) {
        gulp.watch([
            'dev/app/**/*.js',
            'dev/assets/scripts/**/*.js'
        ], ['jshint:validate']);
    }

    gulp.task('jshint:validate', function () {
        var sources = [
            'dev/app/**/*.js',
            '!dev/app/constants.js',
            'dev/assets/scripts/**/*.js'
        ];

        gulp.src(sources)
            .pipe(jshint())
            .pipe(jshint.reporter(jshintStylish));
    });
})(require);
