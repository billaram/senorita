
var express = require('express');
var morgan = require('morgan')
var path = require('path')
var rfs = require('rotating-file-stream')
var fs = require('fs')
var bodyParser = require('body-parser')
/*require('dotenv-safe').load({
    allowEmptyValues: true,
    sample: './.env.sample'
});*/
//local imports 
var logDirectory = path.join(__dirname,'../', 'logs')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

import router from './route'

//start application
var app = express();
var DBADDRESS = "localhost"
var host;

// ensure log directory exists
// create a rotating write stream
var accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory
})
// setup the logger
morgan.token('date', function() {
    var p = new Date().toString().replace(/[A-Z]{3}\+/,'+').split(/ /);
    return( p[2]+'/'+p[1]+'/'+p[3]+':'+p[4]+' '+p[5] );
});
app.use(morgan('combined', {stream: accessLogStream}))
var urlencodedParser = bodyParser.urlencoded({ extended:true,limit:1024*1024*50})
var mongoose   = require('mongoose');
mongoose.connect(process.env.DB_CONN);
var server = app.listen(process.env.PORT, function () {
	try
	{

  host = server.address().address
  var port = server.address().port


console.log('server started successfully \n listening at %s:%s', host, port)	
}
	catch(e)
	{
		console.log(e);
	}	

})

app.use('/',router)



