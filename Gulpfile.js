const gulp = require('gulp');
const concat = require('gulp-concat');
const express = require('express');
const path = require('path');
const gutil = require('gulp-util');

function scripts(cb) {
  gulp.src('src/js/*.js').pipe(concat('app.js')).pipe(gulp.dest('dist/js'));
  cb();
}

function copyHtml(cb) {
  gulp.src('src/*.html').pipe(gulp.dest('dist'));
  cb();
}

function serve(cb) {
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

  cb();
}

function watch(cb) {
  gulp.watch('src/js/*.js', scripts);
  gulp.watch('src/index.html', copyHtml);
  cb();
}

module.exports.serve = gulp.parallel(serve, watch);
module.exports.build = gulp.series(scripts, copyHtml);