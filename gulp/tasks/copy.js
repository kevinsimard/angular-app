(function (require) {
    'use strict';

    var del = require('del'),
        gulp = require('gulp');

    gulp.task('copy:www', function () {
        runTask();
    });

    function runTask() {
        del('www/*', function () {
            gulp.src('dev/*.*')
                .pipe(gulp.dest('www/'));

            gulp.src('dev/assets/**/*')
                .pipe(gulp.dest('www/assets/'));
        });
    }
})(require);
