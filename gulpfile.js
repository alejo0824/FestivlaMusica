const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const webp = require('gulp-webp');


const paths = {
    scss: 'src/scss/**/*.scss',
    imagenes: 'src/img/**/*'
}


function css() {
    return src(paths.scss)
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(dest('./build/css'))
}

function convertirArchivos() {
    watch(paths.scss, css)
}

function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))

}
exports.convertirArchivos = convertirArchivos;
exports.versionWebp = versionWebp;