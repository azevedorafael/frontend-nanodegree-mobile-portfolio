var gulp = require('gulp')
    , imagemin = require('gulp-imagemin')
    , clean = require('gulp-clean')
    , concat = require('gulp-concat')
    , htmlReplace = require('gulp-html-replace')
    , uglify = require('gulp-uglify')
    , usemin = require('gulp-usemin')
    , cssmin = require('gulp-cssmin')
    , htmlmin = require('gulp-htmlmin');


gulp.task('default', ['copy'], function () {
    gulp.start('build-img', 'usemin','minify-html');
});

gulp.task('copy', ['clean'], function () {
    return gulp.src('./**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build-img', function () {
    return gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('usemin', function () {
    return gulp.src('dist/**/*.html')
        .pipe(usemin({
            js: [uglify],
            css: [cssmin]
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-html', function() {
    gulp.src('dist/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'));

      gulp.src('dist/views/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist/views'));
  });
