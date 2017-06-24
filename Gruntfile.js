module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', ['browserify', 'eslint', 'watch']);
  grunt.registerTask('build', ['browserify', 'eslint']);

  grunt.initConfig({
    /**
     * Write ES6 today, compile it to ES5.
     */
    browserify: {
      dist: {
        options: {
          transform: [
            ['babelify', { loose: 'all' }]
          ],
          browserifyOptions: { debug: true }
        },
        files: {
          'dist/app.js': ['src/scripts/**/*.js']
        }
      }
    },
    /**
     * Validates ES6 files via ESLint.
     */
    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      target: 'src/scripts/**/*.js'
    },
    /**
     * Run predefined tasks whenever watched files are added,
     * modified or deleted.
     */
    watch: {
      scripts: {
        files: ['src/scripts/**/*.js'],
        tasks: ['browserify', 'eslint']
      }
    }
  });
};