const {src,dest,watch} = require('gulp');
const sass = require('gulp-sass');


const paths ={
    scss: 'src/scss/**/*.scss'
}


function css (){
    return src(paths.scss)
    .pipe(sass({outputStyle:'expanded'}))
    .pipe(dest('./build/css'))
}

function convertirArchivos (){
    watch(paths.scss,css)
}

exports.convertirArchivos = convertirArchivos;