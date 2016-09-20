import { Meteor } from 'meteor/meteor';
Calls = new Mongo.Collection('calls');
var fs = require('fs');
var Dropbox = require('dropbox');

Meteor.publish('calls', function tasksPublication() {
  return Calls.find({},{limit:10,sort:{createdAt:-1}});
});

Meteor.methods({
sendToDropbox: function (fileName,token){
  var dbx = new Dropbox({ accessToken: token });
  var fullPath=Meteor.absolutePath+'/public/wraps/'+fileName;
  fs.readFile(fullPath, function (err, contents) {
      if (err) {
        console.log('Error: ', err);
      }

      dbx.filesUpload({ path: '/'+fileName, contents: contents })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (err) {
          console.log(err);
        });
    });
},
action: function (command) {
	var path=Meteor.absolutePath+'/public/wraps';
 	var exec = Npm.require('sync-exec');
	return exec(command,{cwd: path});
},

registerCall: function (url,id) {
  Calls.insert({
    url,
    createdAt: new Date()
  });
}
});
