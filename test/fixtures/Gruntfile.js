/*
 * grunt-markedman
 * https://github.com/manuelschneider/grunt-markedman
 *
 * Copyright (c) 2014 Manuel Schneider
 * Licensed under the MPL-2.0 license.
 */

'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    markedman: {
      options: {
        version: '<%= pkg.version %>',
        section: '3'
      },
      readme: {
        files: [
          {src: 'README.md', dest: '../tmp/<%= pkg.name %>.3' }
        ]
      },
      main: {
        options: {
          section: '1'
        },
        files: [
          {src: 'readme_command.md', dest: '../tmp/main_<%= pkg.name %>.1' },
          {src: 'README.md', dest: '../tmp/main_<%= pkg.name %>.3' }
        ]
      },
      service: {
        options: {
          section: '8'
        },
        files: [
          {src: 'readme_service.md', dest: '../tmp/service_<%= pkg.name %>.8' },
          {src: 'README.md', dest: '../tmp/service_<%= pkg.name %>.3' }
        ]
      }
    },
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('../../tasks');

};
