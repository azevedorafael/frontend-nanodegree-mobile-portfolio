var gulp = require('gulp')
, imagemin = require('gulp-imagemin')
, image = require('gulp-image')
, clean = require('gulp-clean')
, concat = require('gulp-concat')
, htmlReplace = require('gulp-html-replace')
, uglify = require('gulp-uglify')
, usemin = require('gulp-usemin')
, cssmin = require('gulp-cssmin')
, cssnano = require('gulp-cssnano')
, htmlmin = require('gulp-htmlmin');

//Run all tasks
gulp.task('default', ['copy'], function () {
gulp.start('image-optm', 'build-img', 'minify-html', 'minify-css', 'minify-js');
});

//Copy the files from development('dev') version to production('dist')
//requires 'clean' task, thatn runs before 'copy'
gulp.task('copy', ['clean'], function () {
return gulp.src('./dev/**/*')
    .pipe(gulp.dest('./dist'));
});

//Delete old version of production('dist') folder
gulp.task('clean', function () {
return gulp.src('./dist')
    .pipe(clean());
});

//Optimize images
gulp.task('image-optm', function () {
gulp.src('./dev/img/*')
    .pipe(image())
    .pipe(gulp.dest('dist/img'));

return gulp.src('./dev/views/images/*')
    .pipe(image())
    .pipe(gulp.dest('/dist/views/images'));
});

//Minify images
gulp.task('build-img', function () {
gulp.src('./dev/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));

return gulp.src('./dev/views/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('/dist/views/images'));
});

//Minify HTML files
gulp.task('minify-html', function () {
gulp.src('dev/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));

return gulp.src('dev/views/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/views'));
});

//Minify CSS files
gulp.task('minify-css', function () {
gulp.src('dev/css/*.css')
    .pipe(cssnano({ safe: true }))
    .pipe(gulp.dest('dist/css'));

return gulp.src('dev/views/css/*.css')
    .pipe(cssnano({ safe: true }))
    .pipe(gulp.dest('dist/views/css'));
});

//Minify JS files
gulp.task('minify-js', function () {
gulp.src('dev/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));

return gulp.src('dev/views/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/views/js'));
});



