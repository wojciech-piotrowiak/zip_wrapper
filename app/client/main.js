import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.events({
	"submit .command-run": function (event) {
		var url = event.target.url.value;
		var id=Random.id();
	
		Meteor.call('command', 'mkdir ',id);
		Meteor.call('command', 'cd ',id);
		Meteor.call('command', 'wget ',url);
		return false;
	}
  });
