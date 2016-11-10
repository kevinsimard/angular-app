(function (require) {
    "use strict";

    var Q = require("q"),
        gulp = require("gulp"),
        es = require("event-stream"),
        argv = require("yargs").argv,
        plugins = require("gulp-load-plugins")();

    gulp.task("locale:generate", function (callback) {
        task(callback);

        if (!! argv.watch) {
            plugins.watch("dev/app/modules/lang/locales/*.json", task);
        }
    });

    function task(callback) {
        getLocales()
            .then(function (locales) {
                gulp.src("gulp/tasks/stubs/locale.ejs")
                    .pipe(plugins.ejs({ locales: locales }))
                    .pipe(plugins.rename("locales.js"))
                    .pipe(gulp.dest("dev/app/modules/lang/"))
                    .on("end", callback);
            });
    }

    function getLocales() {
        var locales = [],
            deferred = Q.defer();

        gulp.src("dev/app/modules/lang/locales/*.json")
            .pipe(plugins.jsonminify())
            .pipe(stream())
            .on("end", function () {
                deferred.resolve(locales);
            });

        function stream() {
            return es.map(function (file, callback) {
                locales.push({
                    file: file.relative.replace(".json", ""),
                    contents: file.contents.toString()
                });

                callback();
            });
        }

        return deferred.promise;
    }
})(require);
