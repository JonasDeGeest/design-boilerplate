// ---
// WATCH TASK
// ---

// plugins
var gulp = require('gulp');

// configs
var config = require('../config');

// task

// SCSS Way:
// gulp.task('watch', ['scss','js','jekyll--build','symbols','browsersync'], function () {
//     gulp.watch(config.symbols.src, ['symbols']);
//     gulp.watch(config.scss.src, ['scss']);
//     gulp.watch(config.js.src, ['js--reload']);
//     gulp.watch(config.watch.jekyllSource, ['jekyll--rebuild']);
// });

// CSS Way:
gulp.task('watch', ['css','js','jekyll--build','symbols','browsersync'], function () {
    gulp.watch(config.symbols.src, ['symbols']);
    gulp.watch(config.css.watch, ['css']);
    gulp.watch(config.js.src, ['js--reload']);
    gulp.watch(config.watch.jekyllSource, ['jekyll--rebuild']);
});
