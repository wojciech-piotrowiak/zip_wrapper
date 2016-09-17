import { Meteor } from 'meteor/meteor';

Calls = new Mongo.Collection('calls');


Meteor.publish('calls', function tasksPublication() {
  return Calls.find({},{limit:10,sort:{createdAt:-1}});
});

Meteor.methods({
  	action: function (command) {
	var path=Meteor.absolutePath+'/public/wraps';
 	var exec = Npm.require('sync-exec');
	return exec(command,{cwd: path});
},

registerCall: function (url,id) {
Calls.insert({
  url,id,
  createdAt: new Date()
});
}
});
