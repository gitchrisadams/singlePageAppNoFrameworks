module.exports = function (grunt) {
  grunt.initConfig({
    // Browserify lets use use require modules. 
    browserify: {
       dist: {
          options: {
             transform: [
                ["babelify", {
                   loose: "all"
                }]
             ]
          },
          files: {
             "./dist/es5/index.js": ["./src/scripts/index.js", "./src/scripts/modeul1.js",]
          }
       }
    },

    // Minify the js code so it is all one line for performance.
    uglify: {
      dist: {
        files: {
          './dist/compiled/index.js' : ["./dist/es5/index.js"]
        }
      }
    },
    // When things change, run tasks.
    watch: {
       scripts: {
          files: ["./src/scripts/*.js"],
          tasks: ["browserify", "uglify"]
       }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["browserify", "uglify"]);
};