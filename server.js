// Sets up server
var express = require('express');
var app = express();

// Static files
app.use(express.static(__dirname + '/static'));

// Templating files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/cats', function(request, response) {
    response.render('cats');
})

app.get('/cars', function(request, response) {
    response.render('cars');
})

app.get('/cars/new', function(request, response) {
    response.render('form');
})

app.listen(8000, function() {
    console.log('listening on port 8000...')
})