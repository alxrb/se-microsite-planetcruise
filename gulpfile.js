var gulp        = require('gulp'),
    shell       = require('gulp-shell'),
    browserSync = require('browser-sync').create(),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify');


// Task for building blog when something changed:
gulp.task('build', shell.task(['jekyll build --watch']));

// Task for serving blog with Browsersync
gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}});
    // Reloads JS concat
    gulp.watch('js/**/*.js', ['concatScripts']);
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

// concatenating scripts
gulp.task('concatScripts', function(){
  return gulp.src([
    './bower_components/jquery/dist/jquery.min.js',
    './js/script.js'])
  .pipe(concat('script.min.js'))
  .pipe(gulp.dest('./js'));
});

// uglify scripts after concatenation
gulp.task('uglifyScripts', ['concatScripts'], function(){
  return gulp.src('./js/main.min.js')
  .pipe(uglify())
  .pipe(gulp.dest('./js'));
});


gulp.task('default', ['build', 'serve']);