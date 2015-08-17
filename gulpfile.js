/**
 * Created by zhulduz on 15/08/15.
 */
var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');


var paths = {
    coffee: ['./src/coffee/**/*.coffee'],
    js: ['./src/js/*.js'],
    templates: ['./src/templates/*.html']
};


gulp.task('coffee', function () {
    return gulp.src(paths.coffee)
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('./src/js/'))
});


gulp.task('templates', ['coffee'], function () {
    return gulp.src(paths.templates)
        .pipe(templateCache({module: "ngSwipebox"}))
        .pipe(gulp.dest('./src/js/'))
});


gulp.task('default', ['templates'], function() {
    return gulp.src(paths.js)
        .pipe(concat('angular-swipebox.js'))
        .pipe(gulp.dest('./dist/'))
});


gulp.task('compress', ['default'], function() {
    return gulp.src('./dist/angular-swipebox.js')
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});
