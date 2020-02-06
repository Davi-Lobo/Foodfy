const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifycss');
const rename = require('gulp-rename');

const sassPath = 'assets/scss/**/*.scss';
const cssPath = 'assets/css';

// Compiling SASS into CSS
function style() {

    // 1. Path of SCSS archives
    return gulp.src(sassPath)

    // 2. Passing the SCSS archives into the compresser
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(uglify())
    .pipe(rename({suffix:"-min"}))

    // 3. Saving into the CSS path
    .pipe(gulp.dest(cssPath))
};

function watch() {
    gulp.watch(sassPath, style);
};

exports.style = style;
exports.watch = watch;
