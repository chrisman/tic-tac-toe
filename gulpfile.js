var gulp = require('gulp')
var concat = require('gulp-concat')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var streamify = require('gulp-streamify')
var uglify = require('gulp-uglify')

var sass = require('gulp-sass')
var normalize = require('node-normalize-scss')
var cssmin = require('gulp-minify-css')

var jade = require('gulp-jade')
var image = require('gulp-image')
var livereload = require('gulp-livereload')
var del = require('del')

gulp.task('html', function(){
  return gulp.src('src/views/*jade')
    .pipe(jade())
    .pipe(gulp.dest('public'))
});

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded',
  includePaths: normalize.includePaths
}
gulp.task('styles', function(){
  return gulp.src('src/sass/*scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(gulp.dest('public/css'))
    .pipe(cssmin())
})

gulp.task('js', function(){
  return browserify('src/js/main.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('public/js'))
})

gulp.task('clean', function(){
  return del(['public/css', 'public/js'])
})

gulp.task('images', function(){
  return gulp.src('src/assets/img/*')
    .pipe(image())
    .pipe(gulp.dest('public/img'))
})

gulp.task('watchman', function(){
  gulp.watch('src/js/**/*js', ['js'])
  gulp.watch('src/sass/**/*scss', ['styles'])
  gulp.watch('src/views/**/*jade', ['html'])

  livereload.listen()
  gulp.watch(['public/**']).on('change', livereload.changed)
})

gulp.task('default', ['html', 'styles', 'js', 'watchman'])
