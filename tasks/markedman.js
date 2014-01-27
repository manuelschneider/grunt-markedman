/*
 * grunt-markedman
 * https://github.com/manuelschneider/grunt-markedman
 *
 * Copyright (c) 2014 Manuel Schneider
 * Licensed under the MPL-2.0 license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('markedman', 'use marked-man to generate manpages from markdown.', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      version: '',
      section: '1',
      manual: '',
      dest: 'dist/readme.1.man',
    });

    var done = this.async();
    var jobs = { errored: 0, pending: 0 };

    this.files.forEach(function(file) {

      var markedMan = require('marked-man');

      jobs.pending++;
      markedMan(grunt.file.read(file.src), {
        version: options.version,
        section: options.section,
        manual: options.manual,
        gfm: true,
      }, function (err, result) {
        jobs.pending--;
        if (err instanceof Error) {
          jobs.errored++;
          grunt.log.error('File "' + file.dest + '"could NOT be created.');
          done(err);
        } else {
          grunt.file.write(file.dest, result);
          grunt.log.writeln('File "' + file.dest + '" created.');
          if (jobs.errored === 0 && jobs.pending === 0) {
            done();
          }
        }
      });
    });
  });

};
