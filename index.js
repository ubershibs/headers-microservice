var express = require('express')
var app = express();
var parser = require('ua-parser-js');


var port = process.env.PORT || 8000;

app.get('*', function(req, res) {
  var ipaddress = req.headers['x-forwarded-for']
  var lang  = req.headers['accept-language']
  var ua = parser(req.headers['user-agent'])
  var os = ua.os
  
  console.log(JSON.stringify(req.headers))
  res.json({
    ipaddress: ipaddress,
    language: lang,
    software: os

  })
})

app.listen(port, function() {
  console.log("Listening on port: " + port);
})
