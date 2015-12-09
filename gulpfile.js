var gulp = require('gulp');

var jade = require('gulp-jade');

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

gulp.task('default', ['jade', 'watch']);
//gulp.task('default', function(){
//    console.log('default gulp task ...');
//});
