var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.
var sass = require('gulp-sass');

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        },
    });
});
gulp.task('sass', function () {
    return gulp.src('sass/*.sass')
                .pipe(sass())
                .pipe(gulp.dest('css'))
                .pipe(bs.reload({stream: true})); // prompts a reload after compilation
});
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("sass/*.sass", ['scss']);
    gulp.watch("*.html").on('change', bs.reload);
});
