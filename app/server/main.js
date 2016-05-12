import { Meteor } from 'meteor/meteor';

Meteor.methods({
  	action: function (command) {
 	const exec = require('child_process').exec;
	const child = exec(command,
	  (error, stdout, stderr) => {
 	   console.log(`stdout: ${stdout}`);
	    console.log(`stderr: ${stderr}`);
	    if (error !== null) {
	      console.log(`exec error: ${error}`);
	    }
	});
	}
});



