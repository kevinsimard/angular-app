(function (require) {
    "use strict";

    var del = require("del"),
        gulp = require("gulp");

    gulp.task("copy:www", task);

    function task() {
        del(["www/*", "www/.*", "!www/.gitignore"], function () {
            gulp.src(["dev/*.*", "dev/.*", "!dev/.gitignore"])
                .pipe(gulp.dest("www/"));

            gulp.src("dev/assets/**/*")
                .pipe(gulp.dest("www/assets/"));
        });
    }
})(require);
