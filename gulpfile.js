const fileinclude = require("gulp-file-include");
const del = require("del");
const gulp = require("gulp");

const srcDir = "./src";
const buildDir = "./dist";

gulp.task("clean", del.bind(null, [buildDir]));

gulp.task("html", function (done) {
  gulp
    .src([srcDir + "/*.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest(buildDir));
  done();
});

gulp.task("styles", function () {
  return gulp
    .src(srcDir + "/css/**/*.css", {
      sourcemaps: true,
    })
    .pipe(
      gulp.dest(buildDir + "/css", {
        sourcemaps: true,
      })
    );
});

gulp.task("scripts", function () {
  return gulp
    .src(srcDir + "/js/**/*.js", {
      sourcemaps: true,
    })
    .pipe(
      gulp.dest(buildDir + "/js", {
        sourcemaps: ".",
      })
    );
});

gulp.task("img", function () {
  return gulp.src(srcDir + "/img/**/*.png").pipe(gulp.dest(buildDir + "/img"));
});

gulp.task("extras", function (done) {
  gulp
    .src([srcDir + "/favicon.ico", srcDir + "/icon.png"])
    .pipe(gulp.dest(buildDir));
  done();
});

gulp.task(
  "default",
  gulp.series("clean", "styles", "scripts", "html", "extras", "img")
);
