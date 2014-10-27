module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true
				}
			},
			app: [
				'fruit/static/js/app.js',
				'fruit/static/js/controller.js',
				'fruit/static/js/services.js',
				'fruit/static/js/admin/app.js',
				'fruit/static/js/admin/controller.js',
				'fruit/static/js/admin/services.js'
			]
		},
		watch: {
			options: {
				livereload: true
			},
			js: {
				files: [
				]
			},
			css: {
				files: [
				]
			}
		}
	});

	// Load plugins here.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	// Register tasks here.
	grunt.registerTask('default', [
		'jshint',
		'watch'
	]);
};