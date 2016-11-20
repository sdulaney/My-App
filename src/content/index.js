/*jshint browser:true */
'use strict';

// load dependencies
require('shared/vendor')();

import welcome from 'shared/welcome'

welcome('content/index.js')

;(function() {
  console.log('CONTENT SCRIPT WORKS!');

  var $ = require('jquery');
  // here we use SHARED message handlers, so all the contexts support the same
  // commands. but this is NOT typical messaging system usage, since you usually
  // want each context to handle different commands. for this you don't need
  // handlers factory as used below. simply create individual `handlers` object
  // for each context and pass it to msg.init() call. in case you don't need the
  // context to support any commands, but want the context to cooperate with the
  // rest of the extension via messaging system (you want to know when new
  // instance of given context is created / destroyed, or you want to be able to
  // issue command requests from this context), you may simply omit the
  // `handlers` parameter for good when invoking msg.init()
  var handlers = require('../modules/handlers').create('ct');
  require('../modules/msg').init('ct', handlers);

	// load the main app file
	var appModule = require('./contentApp');

	// replaces ng-app="appName"
	angular.element(document).ready(function () {
		var contentDiv;
    contentDiv = $("<div id='contentSidebar'><content-sidebar></content-sidebar></div>");
    contentDiv.prependTo('body');
    //contentDiv = $('#contentSidebar');
    angular.bootstrap(contentDiv, [appModule.name]);
    contentDiv.addClass('ng-app');
    contentDiv.addClass('ng-csp');
	  //angular.bootstrap(document, [appModule.name], {
	  //  //strictDi: true
	  //});
	});

  console.log('jQuery version:', $().jquery);
})();