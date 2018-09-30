
const gulp = require('gulp'),
    sass = require('gulp-sass');
    clean = require('gulp-clean');
    browserSync = require('browser-sync').create();
    

gulp.task('sass', function(){
    return gulp.src('app/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.sass', ['sass']);
    gulp.watch('app/**/*.*', ['copy']);
});

gulp.task('copy', function () {
    gulp.src('app/copied/**')
    .pipe(gulp.dest('dist'))
});

gulp.task('clean', function () {
    return gulp.src('dist/**/*.*')
        .pipe(clean());
});

gulp.task('serve', function() {
    browserSync.init({
      server: 'dist'
    });
  
    browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
  });

gulp.task('default', ['sass', 'clean', 'copy', 'serve', 'watch']);