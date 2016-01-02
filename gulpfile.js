var gulp = require('gulp');

var jade = require('gulp-jade');
var browserSync = require('browser-sync').create();

var less = require('gulp-less');
var path = require('path');

gulp.task('less', function (){
    return gulp.src('./src/*.less')
               .pipe(less({
                    paths: [ path.join(__dirname, 'less', 'includes') ]
               }))
               .pipe(gulp.dest('./public/css'))
               .pipe(browserSync.stream());
});

//gulp.task('browser-sync', function(){
gulp.task('serve', function(){
    browserSync.init({
        proxy: 'www.hakobune.com/tycc_remote/jade/public'
    });

    gulp.watch("./src/*.jade", ['jade']);
    gulp.watch("./src/*.less", ['less']);
    gulp.watch("./public/*.html").on('change', browserSync.reload);
    gulp.watch("./public/css/*.css").on('change', browserSync.reload);
});

gulp.task('jade', function(){
    return gulp.src('./src/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('public'))
        .pipe(browserSync.stream());
});

//gulp.task('watch', function(){
//    gulp.watch('./src/*.jade', ['jade']);
//    gulp.watch('./src/*.less', ['less']);
//});

//gulp.task('default', ['jade', 'less', 'watch', 'serve']);
gulp.task('default', ['jade', 'less', 'serve']);
//gulp.task('default', function(){
//    console.log('default gulp task ...');
//});
