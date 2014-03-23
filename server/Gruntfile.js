module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['jshint','build']);
    grunt.registerTask('build', ['clean']);

    // Project configuration.
    grunt.initConfig({
        distdir: 'dist',
        pkg: grunt.file.readJSON('package.json'),
        src:'src/**/*.js',
        clean: ['<%= distdir %>/*'],
        /*
        copy: {
            assets: {
                files: [{ dest: '<%= distdir %>', src : '**', expand: true, cwd: 'src/assets/' }]
            },
            vendor: {
                files: [{dest:'<%= distdir %>', src:'js/**', expand:true, cwd: 'vendor/'}]
            }
        },*/

        jshint: {
            src:['<%= src.js %>'],
            options: {
                jshintrc: "./.jshintrc"
            }
        }
    });
};