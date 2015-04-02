(function (require) {
    'use strict';

    var gulp = require('gulp'),
        plugins = require('gulp-load-plugins')();

    gulp.task('minify:www', task);

    function task(callback) {
        var options = {
            'jsApp': [plugins.uglify(), plugins.rev()],
            'jsVendors': [plugins.uglify(), plugins.rev()],
            'cssApp': [plugins.minifyCss(), 'concat', plugins.rev()],
            'cssVendors': [plugins.minifyCss(), 'concat', plugins.rev()]
        };

        gulp.src('dev/index.html')
            .pipe(plugins.usemin(options))
            .pipe(gulp.dest('www/'))
            .on('end', callback);
    }
})(require);
