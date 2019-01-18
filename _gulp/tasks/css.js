// ---
// CSS TASK
// ---

// plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    postcssImport = require('postcss-import'),
    postcssPresetEnv = require('postcss-preset-env'),
    filesize = require('gulp-filesize'),
    browserSync = require('browser-sync'),
    sourcemaps  = require('gulp-sourcemaps');

// configfile
var config = require('../config').css;

gulp.task('css', function () {
  var plugins = [
      postcssImport(),
      postcssPresetEnv(config.settings)
  ];
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(filesize())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.jekyllCssDes))
    .pipe(browserSync.stream({match: '**/*.css'}))
    .pipe(gulp.dest(config.cssDest))
});
