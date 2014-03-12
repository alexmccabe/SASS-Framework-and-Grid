var gulp 		 = require('gulp'),
	sass 		 = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss 	 = require('gulp-minify-css'),
	jshint 		 = require('gulp-jshint'),
	uglify 		 = require('gulp-uglify'),
	imagemin 	 = require('gulp-imagemin'),
	rename 	 	 = require('gulp-rename'),
	clean 		 = require('gulp-clean'),
	concat 		 = require('gulp-concat'),
	notify 		 = require('gulp-notify'),
	cache 		 = require('gulp-cache'),
	livereload 	 = require('gulp-livereload'),
	lr 			 = require('tiny-lr'),
	server		 = lr();

	gulp.task('default', function() {
		gulp.start('styles');
	});

	gulp.task('styles', function() {
		return gulp.src('assets/sass/main.scss')
		.pipe(sass({ style: 'expanded' }))
		.pipe(gulp.dest('assets/css'))
		.pipe(notify({ message: 'Styles task complete' }));
	});

	gulp.task('clean', function() {
		return gulp.src(['assets/css'], {read: false})
			.pipe(clean());
	});