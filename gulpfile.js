const {src, dest} = require("gulp");
const gulpfile = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const removeComments = require('gulp-strip-css-comments');
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
//const rigger = require("gulp-rigger");  //склеивание js файлов
const uglify = require("gulp-uglify-es").default;  //сжатие js файлов
const plumber = require("gulp-plumber");
const imagemin = require("gulp-imagemin");
const del = require("del");
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const browsersync = require("browser-sync").create();


/* Paths */
const path = {
    build: {
        html: "dist/",
        js: "dist/assets/js/",
        css: "dist/assets/css/",
        images: "dist/assets/img/"
    },
    src: {
        html: "src/*.html",
        js: "src/assets/js/*.js",
        css: "src/assets/sass/style.scss",
        images: "src/assets/img/**/*.{jpg,png,svg,gif,ico}"
    },
    watch: {
        html: "src/**/*.html",
        js: "src/assets/js/**/*.js",
        css: "src/assets/sass/**/*.scss",
        images: "src/assets/img/**/*.{jpg,png,svg,gif,ico}"
    },
    clean: "./dist"
}



/* Tasks */
const browserSync = (done) => {
    browsersync.init({
        server: {
            baseDir: "./dist/"
        },
        port: 3000
    });
}

const browserSyncReload = (done) => {
    browsersync.reload();
}

const html = () => {
    return src(path.src.html, { base: "src/" })
        .pipe(plumber())
        .pipe(htmlmin({
            removeComments: true,
            collapseWhitespace: true,
        }))
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream());
}

const css = () => {
    return src(path.src.css, { base: "src/assets/sass/" })
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions'],
            cascade: true
        }))
        .pipe(dest(path.build.css))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(removeComments())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream());
}

const js = () => {
    return src(path.src.js, {base: './src/assets/js/'})
        .pipe(plumber())
        // .pipe(rigger())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulpfile.dest(path.build.js))
        .pipe(rename({
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(uglify())
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream());
}

const images = () => {
    return src(path.src.images)
        .pipe(imagemin())
        .pipe(dest(path.build.images));
}

const clean = () => {
    return del(path.clean);
}

const watchFiles = () => {
    gulpfile.watch([path.watch.html], html);
    gulpfile.watch([path.watch.css], css);
    gulpfile.watch([path.watch.js], js);
    gulpfile.watch([path.watch.images], images);
}

const build = gulpfile.series(clean, gulpfile.parallel(html, css, js, images));
const watch = gulpfile.parallel(build, watchFiles, browserSync);



/* Exports Tasks */
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
