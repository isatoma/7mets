var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
var browserSync = require('browser-sync');

var paths = {
	'scss': 'src/scss/',
	'css': 'dist/css/'
}

gulp.task('scss', function() {
	var processors = [
		cssnext()
	];
	return gulp.src(paths.scss + '**/*.scss')
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(postcss(processors))
	.pipe(gulp.dest(paths.css))
});


gulp.task('copy', function() {
	gulp.src([
		'src/**/*',
		'!**/*.scss',
	])
	.pipe(gulp.dest('dist'));
});


gulp.task('watch', function(){
	gulp.watch(paths.scss + '**/*.scss',
		['scss']
	);
});
//
// gulp.task('browser-sync', () => {
// 	return browserSync.init(null, {
// 		server: './dest'
// 	});
// });
//
// gulp.task('default', ['scss', 'browser-sync', 'watch', 'copy']);
