/**
 * browsersync.js
 * ==============
 *
 * Configuration Options:
 *
 * - Server - Option 1
 *   -----------------
 *   Use the built-in static server for basic HTML/JS/CSS websites.
 *   Useful for static website.
 *   Keep the server option.
 *
 * - Proxy - Option 2
 *   ----------------
 *   Proxy an EXISTING vhost. Browsersync will wrap your vhost with a proxy URL to view your site.
 *   Useful for Node, PHP or .NET website.
 *   Remove the server option, uncomment the proxy option & set the url.
 *
 * NOTE:
 * - You cannot specify both server & proxy options.
 * - Without the host option, the https option is not needed
 *   for proxy option as it will be inferred from your target url.
 */

const _ = require('lodash');
const browserSync = require('browser-sync');
const gulp = require('gulp');
const log = require('fancy-log');
const os = require('os');

const ip = _.chain(os.networkInterfaces())
  .values()
  .flatten()
  .find({ family: 'IPv4', internal: false })
  .value()
  .address;

function browserSyncTask(done) {
  browserSync.init({
    // Specify a hostname to use
    host: 'smnarnold.test',

    // Stop the browser from automatically opening
    open: false,

    // Serve files from the parent directory
    server: {
      baseDir: '../',
    },
  }, (err, bs) => {
    const https = bs.options.get('https') ? 'https' : 'http';
    const port = bs.options.get('port');
    log(`External IP: ${https}://${ip}:${port}`);
  });

  done();
}

gulp.task('browsersync', browserSyncTask);
