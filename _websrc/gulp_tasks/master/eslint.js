const argv      = require('yargs').argv;
const config    = require('../../master.config.js');
const configApp = require('../../app.config.js');
const eslint    = require('gulp-eslint');
const gulp      = require('gulp');

gulp.task('eslint', function() {
  if (argv.skipESLint !== 'true') {
    return gulp.src([config.assets + config.assetsSubpath + '/' + config.js.src + '/**/*.js', '!node_modules/**'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failOnError());
  }
});
