/**
 * gulpfile.js
 * ===========
 * Rather than manage one giant configuration file responsible
 * for creating multiple tasks, each task has been broken out into
 * its own file in gulp/tasks. Any files in that directory get
 * automatically required below.
 *
 * To add a new task, simply add a new task file to that directory.
 * gulp/tasks/default.js specifies the default set of tasks to run
 * when you run `gulp`.
 */

const requireDir = require('require-dir');

// Globally expose config objects
global.paths = {
  src: './src',
  dist: '../site/themes/moment',
};

global.debug = false;

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp', {recurse: true});
