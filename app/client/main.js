import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
Calls = new Mongo.Collection('calls');

Template.main.onCreated(function bodyOnCreated() {
  Meteor.subscribe('calls');
});

Template.main.helpers({
	calls: function () {
		 return Calls.find({});
	 }
 });

 Template.request.helpers({
   prettifyDate:function(timestamp) {
        return moment(new Date(timestamp)).fromNow();
    }
  });

Template.main.events({
  "click button.actionBtn" :function(event){
    var url=$('#url').val();
    var accessToken=$('#accessToken').val();
    if(accessToken&&url){
      var id=Random.id();
      var createDir='mkdir '+id;
      var downloadFile='cd '+id+' && wget '+url;
      var prepareZip='zip -r '+id+' '+id+' && ';
      prepareZip+='rm -Rf '+id;

      Meteor.call('registerCall', url,id);
      Meteor.call('action', createDir,output);
      Meteor.call('action', downloadFile,output);
      Meteor.call('action', prepareZip,output);

      var fileName=id+'.zip';
      Meteor.call('sendToDropbox',fileName ,accessToken,output);
      $('#url').val('');
      $('#accessToken').val('');
    }
    else {
      alert("Token and url cannot be empty");
    }
  }});

	var output=function(error,result){
		$('#console').val(result.stdout+$('#console').val());
		$('#console').val(result.stderr+$('#console').val());
	}
