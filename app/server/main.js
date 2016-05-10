import { Meteor } from 'meteor/meteor';

Meteor.methods({
  	command: function (command,param) {
 	spawn = Npm.require('child_process').spawn;

	command = spawn(command, [param]);

	command.stdout.on('data',  function (data) {
	  console.log('stdout: ' + data);
	});

	command.stderr.on('data', function (data) {
	  console.log('stderr: ' + data);
	});

	command.on('exit', function (code) {
	  console.log('child process exited with code ' + code);
	});
	}
});



