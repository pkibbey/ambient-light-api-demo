module.exports = function (grunt) {
  'use strict';

  // require it at the top and pass in the grunt instance
  require('time-grunt')(grunt);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.initConfig({
    autoprefixer: {
      options: {
        // Task-specific options go here.
      },
      your_target: {
        // Target-specific file lists and/or options go here.
      },
    },
    sass: {
      dist: {
          options: { style: 'expanded' },
          files: {
              'css/style.css': 'css/sass/style.scss'
          }
      }
    },
    watch: {
      sass: {
          files: ['css/sass/**/*.scss'],
          tasks: [
          'sass'
          ]
      }
    }
  });
grunt.registerTask('default', ['sass', 'autoprefixer']);
};