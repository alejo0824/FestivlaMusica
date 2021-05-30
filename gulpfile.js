const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

//Utilidades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//Utilidades JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*'
}


function css() {
    return src(paths.scss) // Se Escoge la ubicación del archvio scss
        .pipe(sourcemaps.init())
        .pipe(sass()) // Se pasa de scss a css
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/css')) // se genera una carpeta donde se almacenará el archivo
}


function javaScript() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js')) // Se concatena los archivos JS ya que estos no se puende concatenar = que SCSS
        .pipe(terser())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/js')) //Carpeta Destino 
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