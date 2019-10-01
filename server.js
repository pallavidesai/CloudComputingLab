var express = require('express')
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));


app.listen(port, function() {
	console.log('app running')
    console.log("Example app listening at http://:%s", port)
})

