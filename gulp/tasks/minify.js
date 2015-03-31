(function (require) {
    'use strict';

    var gulp = require('gulp'),
        rev = require('gulp-rev'),
        usemin = require('gulp-usemin'),
        uglify = require('gulp-uglify'),
        minifyCss = require('gulp-minify-css');

    gulp.task('minify:www', function () {
        runTask();
    });

    function runTask() {
        var options = {
            'jsApp': [uglify(), rev()],
            'jsVendors': [uglify(), rev()],
            'cssApp': [minifyCss, 'concat', rev()],
            'cssVendors': [minifyCss, 'concat', rev()]
        };

        gulp.src('dev/index.html')
            .pipe(usemin(options))
            .pipe(gulp.dest('www/'));
    }
})(require);
