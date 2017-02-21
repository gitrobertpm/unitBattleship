"use strict";

var express = require("express");

var app = express();

app.use('/static', express.static(__dirname + '/src/scss'));
app.use('/static', express.static(__dirname + '/src/js'));
app.use('/static', express.static(__dirname + '/src/img'));

app.set('view engine', 'pug');
app.set('views','src/views');

app.get('/', function(req, res) {
	var path = req.path;	
	//res.send("test");
	
	res.render('index');
	// if (path !== "/") {
		
		// // RENDER ERROR PAGE
		// res.render("error", {timeline: timeline, isWrongPath: true});
	// } else {

		// // RENDER DATA
		// res.render('index', {friends: friends, timeline: timeline, direct_messages: direct_messages, sent_messages: sent_messages, sorted_messages: sorted_messages});
	// }
});

app.listen(3000, function() {
	console.log("The frontend server is running on port 3000!");
});