module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
	    babel: {
	        options: {
	            sourceMap: false,
	            stage: 0
	        },
	        dist: {
	            files: {
	                'index.js': 'src.js'
	            }
	        }
	    }
	});

	grunt.registerTask('default', ['babel']);
};
