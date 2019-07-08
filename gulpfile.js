var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    svgSprite = require('gulp-svg-sprites'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    pug = require('gulp-pug');

gulp.task('sass', function() { //Таск для пошуку sass файлів
    return gulp.src('app/sass/**/*.scss') /*Обираємо всі файли з даним розширенням*/
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/')) /*Результат кладемо в папку css*/
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('pug', function() {
    gulp.src('app/pug/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});


gulp.task('scripts', function() {
    return gulp.src([
            'app/lips/jquery/dist/jquery.min.js',
            'app/lips/magnific-popup/dist/jquery.magnific-popup.min.js',
        ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
});

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/libs.css')
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css/'));
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('clear', function() {
    return cache.clearAll();
});

// gulp.task('img', function() {
//     return gulp.src('app/img/**/*')
//         .pipe(cache(imagemin({
//             interlaced: true,
//             progressive: true,
//             svgoPlugins: [{ removeViewBox: false }],
//             use: [pngquant()]
//         })))
//         .pipe(gulp.dest('dist/img'));
// });

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts', 'pug', 'build'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/pug/**/*.pug', ['pug']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);

});

gulp.task('build', ['clean', 'sass', 'scripts'], function() {

    var buildMainCss = gulp.src('app/style.css')
        .pipe(gulp.dest('dist'));
    
        var buildCss= gulp.src('app/css/**/*')
            .pipe(gulp.dest('dist/css'));

    var buildFonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
    
    var buildImg = gulp.src('app/img/**/*')
        .pipe(gulp.dest('dist/img'));
        
    var buildJs = gulp.src('app/js/**/*')
        .pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));

});

gulp.task('default', ['watch']);