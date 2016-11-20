import welcome from 'shared/welcome'
import "shared/page.css"

// load dependencies
require('shared/vendor')();



;(function() {
  console.log('NEWTAB SCRIPT WORKS!');
  welcome('newtab/index.js');
  // here we use SHARED message handlers, so all the contexts support the same
  // commands. but this is NOT typical messaging system usage, since you usually
  // want each context to handle different commands. for this you don't need
  // handlers factory as used below. simply create individual `handlers` object
  // for each context and pass it to msg.init() call. in case you don't need the
  // context to support any commands, but want the context to cooperate with the
  // rest of the extension via messaging system (you want to know when new
  // instance of given context is created / destroyed, or you want to be able to
  // issue command requests from this context), you may simply omit the
  // `hadnlers` parameter for good when invoking msg.init()
  var handlers = require('../modules/handlers').create('newtab');
  var msg = require('../modules/msg').init('newtab', handlers);
  var form = require('../modules/form');
  var runner = require('../modules/runner');
  var app = angular.module('newtabApp', [
	   
	]);

	// replaces ng-app="appName"
	angular.element(document).ready(function () {
		var contentDiv;
    contentDiv = $("#newtab");
    contentDiv.prependTo('body');
    //contentDiv = $('#contentSidebar');
    angular.bootstrap(contentDiv, [app.name]);
    contentDiv.addClass('ng-app');
    contentDiv.addClass('ng-csp');
	});

  form.init(runner.go.bind(runner, msg));
})();
