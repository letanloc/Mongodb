var express = require('express'),
  cons=require('consolidate'),
  http = require('http');

var app =express();


app.configure(function(){
	app.set('port',8080);
  app.use(express.bodyParser());
	//app.use(express.compress());
	//app.use(app.router);
});
// tao server
var server = http.createServer(app);
/// thong bao neu co loi
process.on('uncaughtException',function(err){
	  console.log('Caught exception: ' + err);
});
// noi thuc hien get put   dele
require('./router')(app);

// lang nghe
server.listen(app.get('port'),function(){
	console.log('thuc hien lien ket');

});
