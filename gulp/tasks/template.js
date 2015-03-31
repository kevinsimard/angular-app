(function (require) {
    'use strict';

    var Q = require('q'),
        gulp = require('gulp'),
        ejs = require('gulp-ejs'),
        es = require('event-stream'),
        argv = require('yargs').argv,
        watch = require('gulp-watch'),
        rename = require('gulp-rename'),
        minifyHtml = require('gulp-minify-html');

    gulp.task('template:generate', function () {
        if ( !! argv.watch) {
            watch('dev/app/**/*.tpl', runTask);
        }

        return runTask();
    });

    function runTask() {
        return getTemplates()
            .then(function (templates) {
                gulp.src('gulp/tasks/stubs/template.ejs')
                    .pipe(ejs({ 'templates': templates }))
                    .pipe(rename('templates.js'))
                    .pipe(gulp.dest('dev/app/'));
            });
    }

    function getTemplates() {
        var templates = [],
            deferred = Q.defer();

        gulp.src('dev/app/**/*.tpl')
            .pipe(minifyHtml({ 'empty': true }))
            .pipe(es.map(function (file, callback) {
                templates.push({
                    'file': file.relative,
                    'contents': file.contents.toString()
                });

                callback();
            }))
            .on('end', function () {
                deferred.resolve(templates);
            });

        return deferred.promise;
    }
})(require);
