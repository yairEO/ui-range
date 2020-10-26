var gulp = require('gulp'),
    $ = require( "gulp-load-plugins" )({ pattern:['*', 'gulp-'] });

const babelConfig = {
    presets: ['@babel/env', ['@babel/preset-react']],
    plugins: ['@babel/proposal-object-rest-spread', '@babel/plugin-transform-destructuring']
}

function scss(){
    return gulp.src('src/*.scss')
        .pipe($.cssGlobbing({
            extensions: '.scss'
        }))
        .pipe(
            $.sass().on('error', $.sass.logError)
        )
        // .pipe($.combineMq()) // combine media queries
        .pipe($.autoprefixer() )
        .pipe($.cleanCss())
        .pipe(gulp.dest('./dist'))
}

function react(){
    const umdConf = {
        exports: () => 'Switch'
    }

    return gulp.src('src/Switch.react.js')
        .pipe( $.babel(babelConfig))
        .pipe( $.umd(umdConf) )
        .pipe( $.uglify() )
        .pipe( gulp.dest('./dist/') )
}


/**
 *     gulp patch     # makes v0.1.0 → v0.1.1
 *     gulp feature   # makes v0.1.1 → v0.2.0
 *     gulp release   # makes v0.2.1 → v1.0.0
 */
const inc = importance => () =>
    // get all the files to bump version in
    gulp.src('./package.json')
        // bump the version number in those files
        .pipe($.bump({type: importance}))
        // save it back to filesystem
        .pipe(gulp.dest('./'))


function gitTag(){
    return gulp.src('./package.json')
        // commit the changed version number
        .pipe($.git.commit('bumps package version'))
        .pipe($.tagVersion());
}

function watch(){
    gulp.watch('./src/*.scss', scss)
    gulp.watch('./src/Switch.react.js', react)
}

// const build = gulp.series(gulp.parallel(build_js, scss, polyfills), build_jquery_version, react)
const build = gulp.parallel(scss, react)

exports.default = gulp.parallel(build)  // , watch
exports.patch = gulp.series(inc('patch'), gitTag)    // () => inc('patch')
exports.feature = gulp.series(inc('minor'), gitTag)  // () => inc('minor')
exports.release = gulp.series(inc('major'), gitTag)  // () => inc('major')