import { Meteor } from 'meteor/meteor';

Meteor.methods({
  	command: function (command,param) {
 	spawn = Npm.require('child_process').spawn;
	command = spawn(command, [param]);

	command.stdout.on('data',  function (data) {
	  console.log('stdout: ' + data);
	});
	}
});



