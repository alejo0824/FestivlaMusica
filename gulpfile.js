const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const webp = require('gulp-webp');
const concat = require('gulp-concat');


const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*'
}


function css() {
    return src(paths.scss)
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(dest('./build/css'))
}

function javaScript() {
    return src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(dest('./build/js'))
}

function convertirArchivos() {
    watch(paths.scss, css);
    watch(paths.js, javaScript);
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))

}
exports.convertirArchivos = convertirArchivos;
exports.versionWebp = versionWebp;