// ---
// DEFAULT TASK (when calling gulp)
// ---

// plugins
var gulp = require('gulp'),
  rs = require('run-sequence');

// task
gulp.task('default', function (callback) {
  rs('dependencies',
  'symbols',
  'scss',
  'js',
  'js-vendor',
  'jekyll--build',
  callback);
});
