var gulp = require('gulp');

var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    gulp.src('./public')
        .pipe(webserver({
            livereload: true,
            //directoryListing: true,
            directoryListing: {
                enable: true,
                path: '/index.html'
            },
            open: true,
            port: 5000
        }));
});

gulp.task('default', ['webserver']);
