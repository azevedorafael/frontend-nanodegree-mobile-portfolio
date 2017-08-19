var gulp = require('gulp')
    , imagemin = require('gulp-imagemin')
    , image = require('gulp-image')
    , clean = require('gulp-clean')
    , concat = require('gulp-concat')
    , htmlReplace = require('gulp-html-replace')
    , uglify = require('gulp-uglify')
    , usemin = require('gulp-usemin')
    , cssmin = require('gulp-cssmin')
    , htmlmin = require('gulp-htmlmin');


gulp.task('default', ['copy'], function () {
    gulp.start('build-img', 'usemin', 'minify-html');
});

//Copy the files from development('dev') version to production('dist')
//requires 'clean' task, thatn runs before 'copy'
gulp.task('copy', ['clean'], function () {
    return gulp.src('./dev/**/*')
        .pipe(gulp.dest('dist'));
});

//Delete old version of production('dist') folder
gulp.task('clean', function () {
    return gulp.src('dist')
        .pipe(clean());
});

//Optimize images
gulp.task('image-optm', function () {
    gulp.src('./dev/img/*')
        .pipe(image())
        .pipe(gulp.dest('dist/img'));

    gulp.src('./dev/views/images/*')
        .pipe(image())
        .pipe(gulp.dest('/dist/views/images'));
});

//Minify images
gulp.task('build-img', function () {
    gulp.src('./dev/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));

gulp.src('./dev/views/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('/dist/views/images'));
});

gulp.task('usemin', function () {
    return gulp.src('dist/**/*.html')
        .pipe(usemin({
            js: [uglify],
            css: [cssmin]
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-html', function () {
    gulp.src('dist/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));

    gulp.src('dist/views/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/views'));
});
