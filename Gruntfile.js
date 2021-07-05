const sass = require('node-sass');

module.exports = function(grunt) {
  grunt.initConfig({
      sass: {
          options: {
              implementation: sass,
              sourceMap: true
          },
          dist: {
              files: {
                  'style.css': 'assets/sass/style.scss'
              }
          }
      },
      watch: {
        files: ['assets/sass/*.scss'],
        tasks: ['sass'],
      },
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch','sass']);
}