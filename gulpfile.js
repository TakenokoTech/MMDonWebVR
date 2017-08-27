const gulp = require("gulp");
const browserSync =require('browser-sync');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const plumber = require('gulp-plumber');

// import webpack
const webpackConfig = require("./webpack.config.js");

gulp.task('sync', () => {
    browserSync({ server: { baseDir: "./docs/" ,index  : "index.html" } });
});

gulp.task('reload', () => {
    browserSync.reload();
});

gulp.task("react", () => {
    return gulp.src('src/')
        .pipe(plumber())
        .pipe(webpackStream(webpackConfig[0]))
        .pipe(gulp.dest("docs/js"));
});

gulp.task("sass", () => {
    return gulp.src('src/')
        .pipe(plumber())
        .pipe(webpackStream(webpackConfig[1]))
        .pipe(gulp.dest("docs/css"));
  });

gulp.task("html", () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest("docs"));
});

gulp.task("image", () => {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest("docs/images"));
});

gulp.task('watch', () => {
    gulp.watch('./src/**/*.jsx', ['react']);
    gulp.watch('./src/**/*.scss', ['sass']);
    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('./src/images/**/*', ['image']);
    gulp.watch('./docs/**/*', ['reload']);
});

gulp.task("default", ["react", "sass", "html", "image", "sync", "watch"]);
