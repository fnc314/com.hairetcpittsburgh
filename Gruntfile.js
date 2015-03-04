module.exports = function(grunt) {
	grunt.initConfig({
		'http-server' : {
			'dev' : {
				root : './app',

				port : 8080,

				host : '0.0.0.0',

				cache : -1,
				showDir : true,
				autoIndex : true,
				runInBackground : false
			}
		},
		requirejs : {
			options : {
				paths : {
					'angular' : './node_modules/angular/angular.js',
					'angular-route' : './node_modules/angular-route/angular-route.js'
				}
			},
			dev : {
				options : {
					optimize: 'none'
				}
			},
			release : {
				options : {

				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-http-server');

	grunt.registerTask('server', ['http-server:dev']);
};