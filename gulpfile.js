var gulp = require('gulp');

var jade = require('gulp-jade');
var browserSync = require('browser-sync').create();

//gulp.task('browser-sync', function(){
gulp.task('serve', function(){
    browserSync.init({
        proxy: 'www.hakobune.com/tycc_remote/jade/public'
    });

    gulp.watch("./src/*.jade", ['jade']);
    gulp.watch("./public/*.html").on('change', browserSync.reload);
});

gulp.task('jade', function(){
    gulp.src('./src/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('watch', function(){
    gulp.watch('./src/*.jade', ['jade']);
});

gulp.task('default', ['jade', 'watch', 'serve']);
//gulp.task('default', function(){
//    console.log('default gulp task ...');
//});
