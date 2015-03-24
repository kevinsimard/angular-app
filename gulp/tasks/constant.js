(function (require) {
    'use strict';

    var gulp = require('gulp'),
        _ = require('underscore'),
        ejs = require('gulp-ejs'),
        argv = require('yargs').argv,
        rename = require('gulp-rename');

    gulp.task('constant:generate', function () {
        var env = argv.env || 'local',
            constants = getConstants(env);

        gulp.src('gulp/tasks/stubs/constant.ejs')
            .pipe(ejs({ 'constants': constants }))
            .pipe(rename('constants.js'))
            .pipe(gulp.dest('dev/app/'));
    });

    function getConstants(env) {
        var constants = require('../../.env.json');

        try {
            // merge values if environment file exists
            // e.g: .env.local.json, .env.live.json ...
            constants = _.extend(constants, require(
                ['../../.env.', env, '.json'].join('')));
        } catch (exception) {}

        return _.map(constants, function (value, key) {
            return { 'key': key, 'value': JSON.stringify(value) };
        });
    }
})(require);
