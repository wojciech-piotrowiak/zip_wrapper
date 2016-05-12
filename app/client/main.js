import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.events({
	"submit .command-run": function (event) {
		var url = event.target.url.value;
		var id=Random.id();

		var cmd='cd /home/wpiotrowiak;';
		cmd+='mkdir '+id+';';
		cmd+='cd '+id+';';
		cmd+='wget '+url+';';
		cmd+='cd .. ;';
		cmd+='zip '+id+' '+id+' ;';
		cmd+='rm -Rf '+id;
	
		Meteor.call('action', cmd);
		return false;
	}
  });
