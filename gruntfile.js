module.exports = function(grunt) {
 
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "dist/css/style.css": "scr/styles/style.less" 
        }
      }
    }   
});
 
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less']);
};