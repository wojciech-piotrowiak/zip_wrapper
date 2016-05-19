import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
Calls = new Mongo.Collection('calls');


Template.registerHelper("prettifyDate", function(timestamp) {
    return moment(new Date(timestamp)).fromNow();
	});

Template.main.onCreated(function bodyOnCreated() {
  Meteor.subscribe('calls');
});

Template.main.helpers({
	calls: function () {
		 return Calls.find({});
	 }
 });

Template.main.events({
	"keydown input.url": function(event) {
		if(event.which==13)
		{
			var url=event.target.value;
			var id=Random.id();
			var createDir='mkdir '+id;

			var downloadFile='cd '+id+' && wget '+url;

			var prepareZip='zip '+id+' '+id+' && ';
			prepareZip+='rm -Rf '+id;


			Meteor.call('registerCall', url,id,function(error,result){
			});

			Meteor.call('action', createDir,function(error,result){
			$('#console').val($('#console').val()+result.stdout);
			$('#console').val($('#console').val()+result.stderr);
			});
			Meteor.call('action', downloadFile,function(error,result){
			$('#console').val($('#console').val()+result.stdout);
			$('#console').val($('#console').val()+result.stderr);
			});
			Meteor.call('action', prepareZip,function(error,result){
			$('#console').val($('#console').val()+result.stdout);
			$('#console').val($('#console').val()+result.stderr);
			});
		}
	}
  });
