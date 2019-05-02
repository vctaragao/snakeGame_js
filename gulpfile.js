const gulp = require('gulp');
const concat = require('gulp-concat');
const express = require('express');
const path = require('path');
const gutil = require('gulp-util');

gulp.task('scripts', function () {
  gulp.src('src/*.js').pipe(concat('app.js')).pipe(gulp.dest('dist/js'))
});

gulp.task('copyHtml', function () {
  gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/*.js', gulp.series('scripts'));
  gulp.watch('src/index.html', gulp.series('copyHtml'));
});

gulp.task('serve', function () {
  var app = express();

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });
  app.get('/js/app.js', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/js/app.js'));
  })

  app.listen(3000, function () {
    gutil.log("Server started on '" + gutil.colors.green('http://localhost:3000') + "'");
  });
});