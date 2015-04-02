(function (require) {
    'use strict';

    var fs = require('fs'),
        gulp = require('gulp'),
        _ = require('underscore'),
        argv = require('yargs').argv,
        plugins = require('gulp-load-plugins')();

    gulp.task('constant:generate', function () {
        task();

        if ( !! argv.watch) {
            plugins.watch(['.env.json', '.env.*.json'], task);
        }
    });

    function task() {
        var constants = getConstants(argv.env);

        gulp.src('gulp/tasks/stubs/constant.ejs')
            .pipe(plugins.ejs({ 'constants': constants }))
            .pipe(plugins.rename('constants.js'))
            .pipe(gulp.dest('dev/app/'));
    }

    function getConstants(env) {
        var constants = readJsonFileSync('.env.json'),
            envFile = ['.env.', env, '.json'].join('');

        if (fs.exists(envFile)) {
            constants = _.extend(constants,
                readJsonFileSync(envFile));
        }

        return _.map(constants, function (value, key) {
            return { 'key': key, 'value': JSON.stringify(value) };
        });
    }

    function readJsonFileSync(file, encoding) {
        return JSON.parse(fs.readFileSync(
            file, encoding || 'utf8'));
    }
})(require);
