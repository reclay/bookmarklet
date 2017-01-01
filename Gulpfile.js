var gulp=require('gulp');
var sass=require('gulp-sass');

gulp.task('sass',function(){
  gulp.src('css/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'))
});

gulp.task('watch',function(){
  gulp.watch(['css/sass/*.scss'],['sass'])
});

gulp.task('default',function () {
  gulp.run('watch');
});

