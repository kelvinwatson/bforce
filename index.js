var express = require('express');
var app = express();
var path    = require("path");

app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts',express.static(__dirname + '/fonts'));
app.use('/images',express.static(__dirname + '/images'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/owl',express.static(__dirname + '/owl'));
app.use('/owl-carousel',express.static(__dirname + '/owl-carousel'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});