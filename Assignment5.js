var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();
app.use(bodyParser.json());
http.createServer(app).listen(3000);

var win=0;
var loss=0;
app.get('/stats', function (req, res){
  //res.send("this is get");
  res.json({"wins":win,"loss":loss});
  

});

app.post('/flip', function (req, res){
  var choice = req.body.call;
  var result;
  var flip = Math.random();
  if(flip < 0.5) {
    result = "heads";
  }
  else {
    result = "tails";
  }
console.log(choice, result);
 if (result === choice) {
    win++;
  }
  else {
    loss++;
  }
console.log(win , loss);
res.json({"wins":win,"loss":loss});



});


module.exports = app;

