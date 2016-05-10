import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.events({
	"submit .command-run": function (event) {
		var command = event.target.command.value;
		var parameter = event.target.parameter.value;
		Meteor.call('command', command,parameter);
		event.target.command.value = "";
		event.target.parameter.value = "";
		return false;
	}
  });
