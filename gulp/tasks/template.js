(function (require) {
    "use strict";

    var Q = require("q"),
        gulp = require("gulp"),
        es = require("event-stream"),
        argv = require("yargs").argv,
        plugins = require("gulp-load-plugins")();

    gulp.task("template:generate", function (callback) {
        task(callback);

        if (!! argv.watch) {
            plugins.watch("dev/app/**/*.tpl", task);
        }
    });

    function task(callback) {
        getTemplates()
            .then(function (templates) {
                gulp.src("gulp/tasks/stubs/template.ejs")
                    .pipe(plugins.ejs({ templates: templates }))
                    .pipe(plugins.rename("templates.js"))
                    .pipe(gulp.dest("dev/app/"))
                    .on("end", callback);
            });
    }

    function getTemplates() {
        var templates = [],
            deferred = Q.defer();

        gulp.src("dev/app/**/*.tpl")
            .pipe(plugins.minifyHtml({ empty: true }))
            .pipe(stream())
            .on("end", function () {
                deferred.resolve(templates);
            });

        function stream() {
            return es.map(function (file, callback) {
                templates.push({
                    file: file.relative,
                    contents: file.contents.toString()
                });

                callback();
            });
        }

        return deferred.promise;
    }
})(require);
