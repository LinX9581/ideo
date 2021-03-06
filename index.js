var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static('public'));  //靜態檔案放置區

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
}); //網頁起始目錄

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

http.listen(port, host, function() {
  console.log("Server started.......");
});