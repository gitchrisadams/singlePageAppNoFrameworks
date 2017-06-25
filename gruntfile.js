module.exports = function (grunt) {
  grunt.initConfig({
    // Browserify lets use use require modules and transpiles to es6.
    browserify: {
       dist: {
          options: {
             transform: [
                ["babelify", {
                   loose: "all"
                }]
             ]
          },
          // Dest : source:
          files: {
             "./dist/es5/index.js": ["./src/scripts/index.js", "./src/scripts/module1.js"],
             "./dist/es5/display_phones.js": ["./src/scripts/display_phones.js"]
          }
       }
    },

    eslint: {
      target: ['src/scripts/*.js']
    },

    // Minify the js code so it is all one line for performance.
    uglify: {
      dist: {
        // Dest : source:
        files: {
          './dist/compiled/index.js' : ["./dist/es5/index.js"],
          './dist/compiled/display_phones.js' : ["./dist/es5/display_phones.js"]
        }
      }
    },

    // Minify CSS code.
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },

    // When things change, run tasks.
    watch: {
       scripts: {
          files: ["./src/scripts/*.js"],
          tasks: ["browserify", "uglify"]
       },
       css: {
        files: ["./src/css/*.css"],
        tasks: ["cssmin"]
       }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask("default", ["eslint", "browserify", "uglify", "cssmin", "watch"]);
  grunt.registerTask("build", ["eslint", "browserify", "uglify"]);
};