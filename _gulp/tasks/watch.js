// ---
// WATCH TASK
// ---

// plugins
var gulp = require('gulp');

// configs
var config = require('../config');

// task
gulp.task('watch', ['css','js','jekyll--build','symbols','browsersync'], function () {
    gulp.watch(config.symbols.src, ['symbols']);
    gulp.watch(config.css.watch, ['css']);
    gulp.watch(config.js.src, ['js--reload']);
    gulp.watch(config.watch.jekyllSource, ['jekyll--rebuild']);
});
