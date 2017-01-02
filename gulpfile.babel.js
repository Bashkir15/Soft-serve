import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import sass from 'gulp-sass'
import uglifycss from 'gulp-uglifycss'
import autoprefix from 'gulp-autoprefixer'
import cmq from 'gulp-combine-media-queries'
import browserSync from 'browser-sync'
import sourceMaps from 'gulp-sourcemaps'
import rename from 'gulp-rename'

const paths = {
	docs: {
		ejs: './docs/views/*.ejs',
		sass: './docs/styles/*.sass',
	},

	src: {
		styles: './src/styles/*.sass'
	},

	prod: {
		styles: './docs/prod/styles'
	},

	dist: {
		styles: './dist/styles'
	}
};

gulp.task('browserSync', () => {
	browserSync.init(null, {
		proxy: 'http://localhost:8000',
		files: ["docs/**/*.*"],
		port: 7000
	});
});

gulp.task('docStyles', () => {
	gulp.src(paths.docs.sass)
		.pipe(plumber({
			errorHandler: function(err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(sourceMaps.init())
		.pipe(sass({
			errLogToConsole: true,
			outputStyle: 'compact',
			precision: 10
		}))
		.pipe(autoprefix({
			browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
			cascade: true
		}))
		.pipe(uglifycss({
			maxLineLne: 80
		}))
		.pipe(sourceMaps.write('.'))
		.pipe(rename((path) => {
			path.extname = '.min.css'
		}))
		.pipe(gulp.dest(paths.prod.styles))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('srcStyles', () => {
	gulp.src(paths.src.styles)
		.pipe(plumber({
			errorHandler: function(err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(sourceMaps.init())
		.pipe(sass({
			errLogToConsole: true,
			outputStyle: 'compact',
			precision: 10
		}))
		.pipe(autoprefix({
			browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
			cascade: true
		}))
		.pipe(uglifycss({
			maxLineLne: 80
		}))
		.pipe(sourceMaps.write('.'))
		.pipe(rename((path) => {
			path.extname = '.min.css'
		}))
		.pipe(gulp.dest(paths.dist.styles))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('docs', ['browserSync', 'docStyles'], () => {
	gulp.watch(paths.docs.sass, ['docStyles'])
});

gulp.task('src', ['browserSync', 'srcStyles'], () => {
	gulp.watch(paths.src.styles, ['srcStyles'])
});