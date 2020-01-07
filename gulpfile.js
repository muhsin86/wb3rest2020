const { src, dest, watch, series, parallel } = require("gulp"),
concat = require("gulp-concat"),
terser = require('gulp-terser');
uglifyes = require('gulp-uglify-es').default,
babel = require("gulp-babel"),
csso = require('gulp-csso'),
sass = require('gulp-sass'),
browserSync = require('browser-sync').create(),
livereload = require('gulp-livereload');

// Paths
const files = {
	phpPath: 'src/**/*.php',
	scssPath: "src/scss/main.scss",
	jsPath: "src/viewer/js/main.js", 
	coursesPath: "src/controller/courses.js", 
	projectsPath: "src/controller/projects.js",
	worksPath: "src/controller/works.js",
};

// Tasks for copying a php files and images
function php() {
    return src(files.phpPath)
        .pipe(dest('public'))
		.pipe(browserSync.stream())
		.pipe(livereload());  
}

// Tasks for Concatenating And Minifying JavaScript and SASS Files

function mainjs() {
	    return src(files.jsPath)
	    .pipe(concat('main.js'))
	    .pipe(uglifyes())
	    .pipe(babel({
		 presets: ['@babel/preset-env'],
		 plugins: ['@babel/transform-runtime']
		 }))
		 .pipe(terser())
	    .pipe(dest('public/viewer/js'))
	    .pipe(browserSync.stream())
	    .pipe(livereload()); 
}

function coursesjs() {
	    return src(files.coursesPath)
	    .pipe(concat('courses.js'))
	    .pipe(uglifyes())
	    .pipe(babel({
		 presets: ['@babel/preset-env'],
		 plugins: ['@babel/transform-runtime']
		 }))
		 .pipe(terser())
	    .pipe(dest('public/controller'))
	    .pipe(browserSync.stream())
	    .pipe(livereload()); 
}

function projectsjs() {
	    return src(files.projectsPath)
	    .pipe(concat('projects.js'))
	    .pipe(uglifyes())
	    .pipe(babel({
		 presets: ['@babel/preset-env'],
		 plugins: ['@babel/transform-runtime']
		 }))
		 .pipe(terser())
	    .pipe(dest('public/controller'))
	    .pipe(browserSync.stream())
	    .pipe(livereload()); 
}

function worksjs() {
	    return src(files.worksPath)
	    .pipe(concat('works.js'))
	    .pipe(uglifyes())
	    .pipe(babel({
		 presets: ['@babel/preset-env'],
		 plugins: ['@babel/transform-runtime']
		 }))
		 .pipe(terser())
	    .pipe(dest('public/controller'))
	    .pipe(browserSync.stream())
	    .pipe(livereload()); 
}

////////////////////////////////////

function scss()
{
	return src(files.scssPath)
	.pipe(sass().on('error', sass.logError))
	.pipe(csso())
	.pipe(dest('public/css'))
	.pipe(browserSync.stream())
	.pipe(livereload());  
}

// watch task
function watchTask()
{
	livereload.listen();
	browserSync.init({
		server:{
			baseDir: 'public/' }
		});
	watch([files.phpPath, files.jsPath, files.scssPath, files.jsPath, files.coursesPath, files.projectsPath, files.worksPath],
        parallel(php, mainjs, coursesjs,  projectsjs, worksjs, scss)
    ).on('change', browserSync.reload);
}

// Gulp basic task
exports.default = series(
    parallel(php, mainjs, coursesjs, projectsjs, worksjs, scss, watchTask),
);