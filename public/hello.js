var express = require('express');

var app = express();

app.use(express.static(_dirname + '/public'));

app.get('/hello', function(req, res){
	res.send('Hello from express');
});

console.log('Express is listening on 4567');
app.listen(4567);