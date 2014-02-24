module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },
    concat: {
    	options: {
        	separator: ';',
      	},
      	js_frontend: {
      		src: [
						'./bower_components/modernizr/modernizr.js',
						'./bower_components/jquery/dist/jquery.min.js',
        	],
        	dest: './js/frontend.js',
      	}
    },
    uglify: {
      options: {
        mangle: false  // Use if you want the names of your functions and variables unchanged
      },
      js_frontend: {
        files: {
          './js/frontend.js': './js/frontend.js',
        }
      },
    },
    
  });
	
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
	
}