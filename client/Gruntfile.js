module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-html2js');

    // Default task.
    grunt.registerTask('default', ['jshint','build']);
    grunt.registerTask('build', ['clean','html2js','concat','copy:assets', 'copy:vendor']);
    //grunt.registerTask('test-watch', ['karma:watch']);

    // Project configuration.
    grunt.initConfig({
        distdir: 'dist',
        pkg: grunt.file.readJSON('package.json'),

        src: {
            js: ['src/**/*.js'],
            jsTpl: ['<%= distdir %>/templates/**/*.js'],
            //specs: ['test/**/*.spec.js'],
            //scenarios: ['test/**/*.scenario.js'],
            html: ['src/index.html'],
            tpl: {
                app: ['src/app/**/*.tpl.html'],
                common: ['src/common/**/*.tpl.html']
            },
            //less: ['src/less/stylesheet.less'], // recess:build doesn't accept ** in its file patterns
            //lessWatch: ['src/less/**/*.less']
            css: ['src/assets/**/*.css']
        },

        clean: ['<%= distdir %>/*'],

        copy: {
            assets: {
                files: [{ dest: '<%= distdir %>', src : '**', expand: true, cwd: 'src/assets/' }]
            },
            vendor: {
                files: [{dest:'<%= distdir %>', src:'js/**', expand:true, cwd: 'vendor/'}]
            }
        },

        html2js: {
            app: {
                options: {
                    base: 'src/app'
                },
                src: ['<%= src.tpl.app %>'],
                dest: '<%= distdir %>/templates/app.js',
                module: 'templates.app'
            },
            common: {
                options: {
                    base: 'src/common'
                },
                src: ['<%= src.tpl.common %>'],
                dest: '<%= distdir %>/templates/common.js',
                module: 'templates.common'
            }
        },

        concat:{
            dist:{
                options: {
                    banner: ""
                },
                src:['<%= src.js %>', '<%= src.jsTpl %>'],
                dest:'<%= distdir %>/<%= pkg.name %>.js'
            },
            index: {
                src: ['src/index.html'],
                dest: '<%= distdir %>/index.html',
                options: {
                    process: true
                }
            } /*,
            angular: {
                src:['vendor/angular/angular.min.js', 'vendor/angular/angular-route.js'],
                dest: '<%= distdir %>/angular.js'
            },
            jquery: {
                src:['vendor/jquery/*.js'],
                dest: '<%= distdir %>/jquery.js'
            }*/
        },

        uglify: {
            dist:{
                options: {
                    banner: ""
                },
                src:['<%= src.js %>' ,'<%= src.jsTpl %>'],
                dest:'<%= distdir %>/<%= pkg.name %>.js'
            },
            angular: {
                src:['<%= concat.angular.src %>'],
                dest: '<%= distdir %>/angular.js'
            },
            jquery: {
                src:['vendor/jquery/*.js'],
                dest: '<%= distdir %>/jquery.js'
            }
        },

        /* not yet used
        recess: {
            build: {
                files: {
                    '<%= distdir %>/<%= pkg.name %>.css':
                        ['<%= src.less %>'] },
                options: {
                    compile: true
                }
            },
            min: {
                files: {
                    '<%= distdir %>/<%= pkg.name %>.css': ['<%= src.less %>']
                },
                options: {
                    compress: true
                }
            }
        },*/

        jshint:{
            files:['gruntFile.js', '<%= src.js %>', '<%= src.jsTpl %>'],
            options:{
                curly:true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                boss:true,
                eqnull:true,
                globals:{}
            }
        }
    });
};