var gulp = require('gulp')
var uglify = require('gulp-uglify')

gulp.task('uglify', function() {
    gulp.src('./src/view.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})

gulp.task('default', ['uglify'])
