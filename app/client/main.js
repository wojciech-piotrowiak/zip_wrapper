import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.events({
	"keydown input.url": function(event) {
		if(event.which==38)
		{
		alert('up');
		}
	},

	"submit .command-run": function (event) {
		var command = event.target.url.value;
		Meteor.call('action', command,function(error,result){
		$('#console').val(result.stdout);
		});
		event.target.url.value="";
		return false;
	},

	"submit .download": function (event) {
		var url = event.target.url.value;
		var id=Random.id();

		var cmd='cd /home/wpiotrowiak && ';
		cmd+='mkdir '+id+' && ';
		cmd+='cd '+id+' && ';
		cmd+='wget '+url+' && ';
		cmd+='cd .. && ';
		cmd+='zip '+id+' '+id+' && ';
		cmd+='rm -Rf '+id;
	
		Meteor.call('action', cmd,function(error,result){
		
		});
		return false;
	}
  });
