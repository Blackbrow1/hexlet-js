const { src, dest, parallel } = require('gulp');

const copyFile = () => {
  return src('dist/**/*.pug')
  .pipe(dest('build/pages'));
};

const copySass = () => {
  return src('dist/**/*.sass')
  .pipe(dest('build/sass'));
};

exports.copyFiles = parallel(copyFile, copySass);