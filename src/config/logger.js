var fs = require('fs')
var path = require('path')
var logDirectory = path.join(__dirname,'../', 'logs')

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
var logger = (function(){
var winston = require('winston')
  var log_rotate_options = {
    filename: '../logs/applications.log',
    datePattern: 'yyyy-MM-dd.',
    prepend: true,
    level: process.env.ENV === 'development' ? 'debug' : 'info'
  }
var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
      new (require('winston-daily-rotate-file'))(log_rotate_options)
    ]
  });
logger.remove(winston.transports.Console);
//winston.handleExceptions(new winston.transports.File({ filename: 'logs/exeception.log' }))
return logger;
})()

module.exports = logger;
