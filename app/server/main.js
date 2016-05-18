import { Meteor } from 'meteor/meteor';

Calls = new Mongo.Collection('calls');


Meteor.publish('calls', function tasksPublication() {
  return Calls.find();
});

Meteor.methods({
  	action: function (command) {
 	var exec = require('sync-exec');
	return exec(command,{cwd: '/home/wpiotrowiak/wraps'});
},

registerCall: function (url,id) {
Calls.insert({
  url,id,
  createdAt: new Date()
});
}
});
