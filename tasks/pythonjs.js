/*
 * grunt-pythonjs
 * https://github.com/VTJamie/grunt-pythonjs
 *
 * Copyright (c) 2015 Jamieson Abbott
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	var PythonJS = require("python-js");
	var path = require('path');
	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('pythonjs', 'A Grunt plugin for PythonJS to compile pythonjs to javascript.', function() {
		// Merge task-specific and/or target-specific options with these
		// defaults.
		var options = this.options({

		});

		// Iterate over all specified file groups.
		this.files.forEach(function(f) {

			// // Concat specified files.
			var src = f.src.filter(function(filepath) {
				// Warn on and remove invalid source files (if
				// nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			}).map(function(filepath) {
				// Read file source.
				return filepath;
			});
			var idx, dest;
			for (idx in src) {
				dest = path.join(f.dest, src[idx]).replace(/\.py$/, ".js");
				var javascriptcode = PythonJS.translator.to_javascript(grunt.file.read(src[idx]));
				// Write the destination file.
				grunt.file.write(dest, javascriptcode);
				// Print a success message.
				grunt.log.writeln('File "' + dest + '" created.');
			}

		});
	});

};
