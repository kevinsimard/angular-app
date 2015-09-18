(function (require) {
    'use strict';

    var fs = require('fs'),
        gulp = require('gulp'),
        _ = require('underscore'),
        argv = require('yargs').argv,
        plugins = require('gulp-load-plugins')();

    gulp.task('constant:generate', function (callback) {
        task(callback);

        if (!!argv.watch) {
            plugins.watch(['.env.json', '.env.*.json'], task);
        }
    });

    function task(callback) {
        var constants = getConstants(argv.env);

        var stream = gulp.src('gulp/tasks/stubs/constant.ejs')
            .pipe(plugins.ejs({ constants: constants }))
            .pipe(plugins.rename('constants.js'))
            .pipe(gulp.dest('dev/app/'));

        if (typeof callback === 'function') {
            stream.on('end', callback);
        }
    }

    function getConstants(env) {
        var constants = readJsonFileSync('.env.json'),
            envFile = ['.env.', env, '.json'].join('');

        try {
            constants = _.extend(constants,
                readJsonFileSync(envFile));
        } catch (error) {}

        return _.map(constants, function (value, key) {
            return { key: key, value: JSON.stringify(value) };
        });
    }

    function readJsonFileSync(file, encoding) {
        return JSON.parse(fs.readFileSync(
            file, encoding || 'utf8'));
    }
})(require);
