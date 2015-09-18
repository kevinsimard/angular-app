(function (require) {
    'use strict';

    var gulp = require('gulp'),
        argv = require('yargs').argv,
        plugins = require('gulp-load-plugins')(),
        jshintStylish = require('jshint-stylish');

    gulp.task('jshint:validate', function () {
        task();

        if (!!argv.watch) {
            plugins.watch('dev/app/**/*.js', task);
        }
    });

    function task() {
        var sources = [
            'dev/app/**/*.js',
            '!dev/app/constants.js',
            '!dev/app/templates.js'
        ];

        gulp.src(sources)
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter(jshintStylish));
    }
})(require);
