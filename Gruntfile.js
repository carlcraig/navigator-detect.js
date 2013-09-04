module.exports = function(grunt) {
  "use strict";

  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-clean' );
  grunt.loadNpmTasks( 'grunt-strip' );
  grunt.loadNpmTasks( 'grunt-karma' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  grunt.registerTask( 'build', [
    'jshint',
    'uglify',
    'strip:build'
  ]);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner:
        '/**\n' +
          ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
          ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
          ' */\n'
    },

    /**
     * Clean
     */
    clean: {
    },

    /**
     * Uglify
     */
    uglify: {
      options: {
        preserveComments: 'some',
        banner: '<%= meta.banner %>'
      },
      min: {
        options: {
          mangle: true
        },
        files: {
          'dist/navigator-detect.min.js': [
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
    }

  });
};