(function (require) {
    'use strict';

    var fs = require('fs'),
        gulp = require('gulp'),
        _ = require('underscore'),
        ejs = require('gulp-ejs'),
        argv = require('yargs').argv,
        watch = require('gulp-watch'),
        rename = require('gulp-rename');

    gulp.task('constant:generate', function () {
        runTask();

        if ( !! argv.watch) {
            watch(['.env.json', '.env.*.json'], runTask);
        }
    });

    function runTask() {
        var constants = getConstants(argv.env);

        gulp.src('gulp/tasks/stubs/constant.ejs')
            .pipe(ejs({ 'constants': constants }))
            .pipe(rename('constants.js'))
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
