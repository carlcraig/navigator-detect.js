module.exports = function(grunt) {
  "use strict";

  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-strip' );
  grunt.loadNpmTasks( 'grunt-karma' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks('grunt-closure-compiler');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks( 'grunt-contrib-copy' );

  grunt.registerTask( 'build', [
    'jshint',
    'uglify:dist',
    'closure-compiler:dist',
    'strip:build',
    'usebanner'
  ]);

  grunt.registerTask( 'demo', [
    'build',
    'copy:demo'
  ]);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner:
        '/**\n' +
          ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
          ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
          ' */'
    },

    copy: {
      demo: {
        files: [
          {expand: true, flatten: true, src: ['dist/*.js'], dest: 'demo/js/', filter: 'isFile'}
        ]
      }
    },

    /**
     * Uglify
     */
    uglify: {
      options: {
        preserveComments: 'some',
        banner: '<%= meta.banner %>\n'
      },
      dist: {
        options: {
          mangle: false,
          compress: false,
          beautify: true
        },
        files: {
          'dist/navigator-detect.js': [
            'src/navigator-detect.js'
          ]
        }
      }
    },

    /**
     * Strip
     */
    strip : {
      build : {
        src : 'dist/**/*.js',
        options : {
          nodes : ['console'],
          inline : true
        }
      }
    },

    /**
     * JSHint
     */
    jshint: {
      options: {
        curly:true,
        eqeqeq:true,
        immed:true,
        latedef:true,
        newcap:true,
        noarg:true,
        sub:true,
        boss:true,
        eqnull:true,
        evil:true,
        globals:{}
      },
      all:['src/navigator-detect.js', 'Gruntfile.js','test/**/*.js']
    },

    /**
     * Watch
     */
    watch: {
      karma: {
        files: ['src/*.js', 'test/*.js'],
        tasks: ['karma:unit:run']
      }
    },

    /**
     * Karma
     */
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        background: true
      }
    },

    /**
     * Closure Compiler
     * uses CLOSURE_PATH environment variable to point towards closure compiler jar file
     * make sure env variable points to root of closure path, meaning the jar file
     * will be CLOSURE_PATH/build/compiler.jar
     */
    'closure-compiler': {
      dist: {
        js: 'src/navigator-detect.js',
        jsOutputFile: 'dist/navigator-detect.min.js',
        maxBuffer: 500,
        options: {
          compilation_level: 'ADVANCED_OPTIMIZATIONS',
          language_in: 'ECMASCRIPT5'
        }
      }
    },

    /**
     * Banner
     */
    usebanner: {
      taskName: {
        options: {
          position: 'top',
          banner: '<%= meta.banner %>'
        },
        files: {
          src: [ 'dist/navigator-detect.min.js' ]
        }
      }
    }

  });
};