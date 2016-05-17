import { Meteor } from 'meteor/meteor';

Meteor.methods({
  	action: function (command) {
 	var exec = require('sync-exec');
	return exec(command,{cwd: '/home/wpiotrowiak/wraps'});
	}
});
