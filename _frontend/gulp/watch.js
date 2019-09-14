const chalk = require('chalk');
const gulp = require('gulp');
const log = require('fancy-log');
const { reload } = require('browser-sync');

const types = [
  {
    src: 'src/scss/**/*.scss',
    tasks: ['build:styles'],
  },
  {
    src: 'src/js/**/*.{js}',
    tasks: ['build:scripts'],
  },
  {
    src: [
      `${global.paths.templates}/**/*.{hbs,html,twig}`,
      `!${global.paths.templates}/**/node_modules/**`,
      `!${global.paths.templates}/**/styleguide/**`,
      `!${global.paths.templates}/**/vendor/**`,
      `!${global.paths.templates}/**/vendors/**`,
    ],
    tasks: null,
  },
];

function watchTask(done) {
  types.forEach((type) => {
    if (type.tasks) {
      gulp.watch(type.src, gulp.series(...type.tasks)).on('change', (path) => {
        log(`File '${chalk.cyan(path)}' was changed`);
      });
    } else {
      gulp.watch(type.src).on('change', (path) => {
        log(`File '${chalk.cyan(path)}' was changed`);
        reload();
      });
    }
  });

  done();
}

gulp.task('watch', watchTask);
