var express	= require("express");
var app	= express();

app.use(express.static("."));
app.use(express.static("cellular"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'index.html')
})

app.listen(7777, function () {
    console.log("Working on port 7777");
})