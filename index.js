var express = require('express');
var app = express();

app.use(express.static('public'));  //靜態檔案放置區

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
}); //網頁起始目錄

app.listen(3001,function(){
	console.log('listening on *:3001');
});
